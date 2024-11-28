import "./app.css";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Navigation from "./components/Navigation";


function App() {
 
  return (
     <div className="main">
        <Navigation/>
        <Greeting/>
        <Footer/>
     </div> 
  );
}

export default App;
