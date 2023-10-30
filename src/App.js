import './index.scss'
import Home from "./Pages/Home";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
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
