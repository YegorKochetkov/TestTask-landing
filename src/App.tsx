import React from 'react';
import './App.scss';
import { Header } from "./components/Header";
import { Main } from './components/Main';
import { Footer } from "./components/Footer";

function App() {
  return (
    <section className="app">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
