import './index.scss'
import Home from "./components/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Loader from 'react-loaders';
import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading content
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  
  return (
    <>
  {loading ? (
        <Loader />
      ) : (
        // Render your main content here when loading is false
        <Router>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/services" element={<Services/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </Router>
      )}
    
    </>
  );
}

export default App;
