import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Layout from "./components/Layout";
function App() {
  return (
    <>
    <Router>
    
    <Routes>
      <Route path="/" element={<Layout/>}></Route>
      <Route element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>\
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    
    </Routes>
    
      
    </Router>
    </>
  );
}

export default App;
