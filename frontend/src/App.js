import React,{ useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [display, setDisplay] = useState('hidden');

  const Display = () => {
      setTimeout(() => setDisplay('hidden'), 1000);
      // setTimeout(setDisplay('hidden'), 4000);  
      setDisplay('');
    
  }
  return (
    <Router>
      <Navbar exact path="/" title="Training and Placement Cell" />
      <Routes>
          <Route exact path="/create-post" element={<CreatePost/>}/>
        </Routes>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      <Routes>
          <Route exact path="/contact" element={<Contact heading="Enter your query below:" message="Your response has been Submitted!" display={display} Display={Display} />
}/>

        </Routes>
    </Router>
  );
}

export default App;
