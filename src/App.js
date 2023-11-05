import "./App.scss";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Navigation from "./components/Navbar/Navigation";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <>
      <Router>
        {/* <Navigation/> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </>

  );
}

export default App;
