import React from 'react';
import './App.scss';
import { Header } from "./components/Header";
import { Main } from './components/Main';
import { useGetUsersQuery } from "./store";
import { selectCurrentUsers } from './store/currentUsersSlice';
import { useAppSelector } from './store/hooks';

function App() {
  const currentUsers = useAppSelector(selectCurrentUsers);
  const { data } = useGetUsersQuery(currentUsers);

  return (
    <section className="app">
      <Header />
      <Main />
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
