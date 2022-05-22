import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Main from "./Main";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Footer from "./Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Main />
      <Education />
      <Experience />
      <Project />
      <Footer />
    </main>
  );
}

export default App;
