import './App.css';
import 'animate.css';

import {useState} from 'react';
import {useEffect} from 'react';

import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import Settings from './pages/Settings.js';
import Simulator from './pages/Simulator.js';
import Dashboard from './pages/Dashboard.js';

function App() {
  let pages = {
    'home':Home,
    'settings':Settings,
    'dashboard':Dashboard,
    'simulator':Simulator,
  }

  useEffect(()=>{
    console.log("Loading done");
  })

  let [state, setState] = useState({
    page:'home',
  });

  function setPage(page){
    setState({
      ...state,
      page:page,
    })
  }

  let PageComponent = pages[state.page]

  return (
    <div className="App">
      <NavBar state={state} setPage={setPage}/>
      <PageComponent state={state} setPage={setPage}/>
    </div>
  );
}

export default App;
