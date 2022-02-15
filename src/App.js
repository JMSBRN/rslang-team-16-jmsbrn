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

function App() {
  const pageFromLocal = JSON.parse(localStorage.getItem('page'));
  const groupFromLocal = JSON.parse(localStorage.getItem('group'));
  const [words, setWords] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [setLoginValues] = useState('');
  const [setRegistrValues] = useState('');
  const [pagePagination, setPagePagination] = useState(pageFromLocal);
  const stages = [1,2,3,4,5,6];
  const [group, setGroup] = useState(0);
  const [wordSchoolbook, setWordSchoolbook] = useState('')
  const setStageNumToLocal = (e)=> {
    setGroup(e.target.dataset.num)
    localStorage.setItem('group', JSON.stringify(e.target.dataset.num));
  };
  const getWordsHandle = () => {
    getWords(groupFromLocal,pagePagination).then(resp => 
      setWords(resp.items)
    )
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
     };
     setLoginValues(email, password);
     loginUser(user) ;
	};
	const getRegistrValues = (e) => {
    e.preventDefault();
    const user = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`
     };
     setRegistrValues(name, email, password);
     createUser(user);
	};
  const clearLocalStorage = () => {
    localStorage.clear();
    window.location.reload();
  };
  //??  
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [countC, setCountC] = useState(0);
  const [countD, setCountD] = useState(0);
  const inecreaseA = () => {
     setCountA(countA + 1);
  };
  const decreaseA = () => {
    if(countA > 0){
     setCountA(countA - 1);
    }
  };
  const inecreaseB = () => {
    setCountB(countB + 1);
  };
  const decreaseB = () => {
    if(countB > 0){
     setCountB(countB - 1);
    }
  };
  const inecreaseC = () => {
    setCountC(countC + 1);
  };
  const decreaseC = () => {
    if(countC > 0){
     setCountC(countC - 1);
    }
  };
  const inecreaseD = () => {
    setCountD(countD + 1);
  };
  const decreaseD = () => {
    if(countD > 0){
     setCountD(countD - 1);
    }
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
        countA,
        countB,
        countC,
        countD,
        inecreaseA,
        decreaseA,
        inecreaseB,
        decreaseB,
        inecreaseC,
        decreaseC,
        inecreaseD,
        decreaseD,
        pagePagination,
        handleChangePagePagination,
        setPagePagination,
        setStageNumToLocal,
        stages,
        getWordValue,
        wordSchoolbook
      }}>
       <Header/> 
       <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='games' element={<Games/>}/>
            <Route path='schoolbook' element={<Schoolbook/>}/>
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
