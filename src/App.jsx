import styles from "./App.module.css";
import  {Hero} from "./components/hero/hero";

import {Navbar}  from "./components/Navbar/Navbar";
import About from './components/about/about';
import { Experience } from "./components/experience/experience";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";


function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;