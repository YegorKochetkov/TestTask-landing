import React from 'react';
import './App.css';
import { useGetUsersQuery } from "./store";
import { selectCurrentUsers } from './store/currentUsersSlice';
import { useAppSelector } from './store/hooks';

function App() {
  const currentUsers = useAppSelector(selectCurrentUsers);
  const { data } = useGetUsersQuery(currentUsers);

  return (
    <ul>
      {data?.users.map((user) => (
        <li key={user.id}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

export default App;
