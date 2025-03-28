import styles from "./App.module.css";
import  {Hero} from "./components/hero/hero";

import {Navbar}  from "./components/Navbar/Navbar";
import About from './components/about/about';


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
    </div>
  );
}

export default App;