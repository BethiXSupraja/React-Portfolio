import Aboutme from "./component/Aboutme";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Projects from "./component/Projects";

function App() {
  return (
    <div className="app">
     <main>
     <Header/>
      <Aboutme/>
      <Experience/>
      <Projects/>

     </main>
     <Footer/>
    </div>
  );
}

export default App;
