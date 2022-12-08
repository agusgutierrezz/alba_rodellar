import './App.scss';
import Home from './components/Home';
import Footer from './components/Footer';
import WorkDetail from "./components/WorkDetail";
import Showreel from './components/ShowReel';
import logo from './logo.svg';

import { Link, Route, Routes, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <header className="header b-branding container">
        <div className='logo'>
        <img  src={logo} alt="logo"/>
        </div>
        <div className='brand'>
          <span>alba</span><span>rodellar</span> 
        </div>
      </header>
      <Showreel/>
       <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
            <Route path="/works/:workId"  element={<WorkDetail />}>
          </Route>
        </Routes>
        <footer>
          <Footer/>
        </footer>
    </div>
  );
}

export default App;
