import React from 'react'
import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import CatIndex from './pages/CatIndex'
import CatShow from './pages/CatShow'
import CatNew from './pages/CatNew'
import CatEdit from './pages/CatEdit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'



function App() {
  return (
    <div>
      App
      <Header/>
      <Home/>
      <CatIndex/>
      <CatShow/>
      <CatNew/>
      <CatEdit/>
      <NotFound/>
      <Footer/>



      
    </div>
  );
}

export default App;
