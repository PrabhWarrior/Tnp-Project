import React,{ useState } from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Post from './components/Post';
import Edit from "./components/Edit";

function App() {
  const [display, setDisplay] = useState('hidden');

  const Display = () => {
      setTimeout(() => setDisplay('hidden'), 1000);
      // setTimeout(setDisplay('hidden'), 4000);  
      setDisplay('');
    
  }
  return (
    <Router>
      <Navbar title="Training and Placement Cell" />
      <Routes>
          <Route exact path="/create-post" element={<CreatePost/>}/>
        </Routes>
      <Routes>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      <Routes>
          <Route exact path='/post/:post_id' element={<Post/>}/>
        </Routes>
      <Routes>
          <Route exact path="/about" element={<About/>}/>
        </Routes>
      <Routes>
          <Route exact path="/edit/:post_id" element={<Edit/>}/>
        </Routes>
      <Routes>
          <Route exact path="/contact" element={<Contact heading="Enter your query below:" message="Your response has been Submitted!" display={display} Display={Display} />
}/>  </Routes>
    </Router>
  );
}

export default App;
