import React from 'react';
import './App.css';
import { Header } from "./components/Header";
import { useGetUsersQuery } from "./store";
import { selectCurrentUsers } from './store/currentUsersSlice';
import { useAppSelector } from './store/hooks';

function App() {
  const currentUsers = useAppSelector(selectCurrentUsers);
  const { data } = useGetUsersQuery(currentUsers);

  return (
    <>
      <Header />
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
