import React,{useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import { Context } from './Context';
import './app.css';
import {getWords,createUser, loginUser} from './Api';
import Header from './Header'
import Footer from './Footer.jsx';
import Layout from './Layout';
import NoPage from './NoPage';
import Home from './pages/Home';
import  Games from './pages/Games';
import Schoolbook from './pages/Schoolbook';
import Statistics from './pages/Statistics';
import About from './pages/About';
import Login from './components/Login';
import Menu from './components/Menu';
import Auth from './components/Auth';
import Sprint from './components/Sprint';
import AudioCall from './components/AudioCall';
import Dictionary from './components/Dictionary';
import AudioGameField from './components/audioCall/components/audiogame/AudioGameField';

function App() {
  const pageFromLocal = JSON.parse(localStorage.getItem('page'));
  const groupFromLocal = JSON.parse(localStorage.getItem('group'));
  const [words, setWords] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginValues,setLoginValues] = useState('');
  const [registrValues, setRegistrValues] = useState('');
  const [pagePagination, setPagePagination] = useState(pageFromLocal);
  const stages = [1,2,3,4,5,6];
  const [group, setGroup] = useState(0);
  const [wordSchoolbook, setWordSchoolbook] = useState('');
  
  const setStageNumToLocal = (e)=> {
    setGroup(e.target.dataset.num)
    localStorage.setItem('group', JSON.stringify(e.target.dataset.num));
  };
  const getWordsHandle = () => {
    getWords(groupFromLocal,pagePagination).then(resp => 
      setWords(resp.items)
    );
  };
  const closeMenu = () => {
    setTimeout(() => {
    const menu =  document.getElementById('menu');
     menu.className = 'menu-hide';
    }, 0);
  };
  const openMenu = () => {
    setTimeout(() => {
    const menu =  document.querySelector('.menu-hide');
     menu.className = 'menu';
    }, 0);
  };
  const closeLogin = () => {
    setTimeout(() => {
    const menu =  document.getElementById('login');
     menu.className = 'login-hide';
    }, 0);
  };
  const openLogin = () => {
    setTimeout(() => {
    const menu =  document.querySelector('.login-hide');
     menu.className = 'login';
    }, 0);
  };
  const closeAuth = () => {
    setTimeout(() => {
    const menu =  document.getElementById('auth');
     menu.className = 'auth-hide';
    }, 0);
  };
  const openAuth = () => {
    setTimeout(() => {
    const menu =  document.querySelector('.auth-hide');
     menu.className = 'auth';
    }, 0);
  };
  const handleGetName = (e) => {
    setName(e.target.value);
  };
  const handleGetEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGetPassword = (e) => {
    setPassword(e.target.value);
  };
	const getLoginValues = (e) => {
     e.preventDefault();
    const user = {
      email: `${email}`,
      password: `${password}`
     }
     setLoginValues(email, password);
     loginUser(user);
	};
	const getRegistrValues = (e) => {
     e.preventDefault();
    const user = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`
     }
    setRegistrValues(name, email, password);
     createUser(user);
	};
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleChangePagePagination = (event, value) => {
    setPagePagination(value - 1);
  };
  const getWordValue = (e) => {
    setWordSchoolbook(e.target.dataset.word);
  };
  return (
    <div className="app">
      <Context.Provider value={{
        getWordsHandle,
        group,
        words,
        closeMenu,
        openMenu,
        closeLogin,
        openLogin,
        closeAuth,
        openAuth,
        handleGetName,
        handleGetEmail,
        handleGetPassword,
        email,
        password,
        getLoginValues,
        getRegistrValues,
        clearLocalStorage,
        pagePagination,
        handleChangePagePagination,
        setPagePagination,
        setStageNumToLocal,
        stages,
        getWordValue,
        wordSchoolbook,
      }}>
       <Header/> 
       <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='games' element={<Games/>}/>
            <Route path='sprint' element={<Sprint/>}/>
            <Route path='audioCall' element={<AudioCall/>}/>
            <Route path="/audio-translate-game/:id" element={<AudioGameField type={'word'}/>}/>
            <Route path="/audio-find-game/:id" element={<AudioGameField  type={'sentence'}/>}/>
            <Route path='schoolbook' element={<Schoolbook/>}/>
            <Route path='schoolbook/dictionary' element={<Dictionary/>}/>
            <Route path='statistics' element={<Statistics/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
       </Routes>
       <Login/>
       <Auth/>
       <Menu/>
      <Footer/>
      </Context.Provider>
    </div>
  );
};
export default App;
