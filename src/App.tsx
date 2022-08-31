import type { Component } from 'solid-js';

import logo from './assets/logo.svg';
import styles from './styles/App.module.css';
import Counter from "./components/Counter";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
      </header>
      <Counter/>
    </div>
  );
};

export default App;
