import React, {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from './Context';
import './app.css';
import {getWords} from './Api';
import Header from './Header'
import Footer from './Footer.jsx';
import Layout from './Layout';
import NoPage from './NoPage';
import Home from './pages/Home';
import  Games from './pages/Games';
import Schoolbook from './pages/Schoolbook';
import Statistics from './pages/Statistics';
import About from './pages/About';

function App() {
  const [words, setWords] = useState([]);
  const [groups, setGroups] = useState(1);
  const handlerGetWords = () => {
    getWords(groups,1).then(resp => 
      setWords(resp.items)
      )
  }
  const handlerSetGroupInc = () => { 
    if (groups < 5 ){
      setGroups(groups + 1)
    }else {
      setGroups(groups - 0)
    }
  }
  const handlerSetGroupDecr = () => {
    if (groups > 1 ){
      setGroups(groups - 1)
    }else {
      setGroups(groups + 0)
    }
  }
  return (
    <div class="app">
      <Context.Provider value={{
        handlerGetWords,
        handlerSetGroupInc,
        handlerSetGroupDecr,
        groups,
        words
      }}>
       <Header/> 
       <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='games' element={<Games/>}/>
            <Route path='shoolbook' element={<Schoolbook/>}/>
            <Route path='statistics' element={<Statistics/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
       </Routes>
      <Footer/>
      </Context.Provider>
    </div>
  );
}
export default App;
