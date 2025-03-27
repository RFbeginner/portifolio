import styles from "./App.module.css";
import { Hero } from "./components/hero/hero";

import { Navbar } from "./components/navbar/navbar";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
    </div>
  );
}

export default App;