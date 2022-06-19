import React from 'react';
import './App.scss';
import { Header } from "./components/Header";
import { Main } from './components/Main';

function App() {
  return (
    <section className="app">
      <Header />
      <Main />
    </section>
  );
}

export default App;
