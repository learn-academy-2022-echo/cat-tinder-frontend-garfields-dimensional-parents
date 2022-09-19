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
import { Routes, Route } from "react-router-dom"
import cats from './mockCats'


const App = () => {

  console.log(cats)

  return (
    <div>
      App
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catindex" element={<CatIndex />} />
        <Route path="/catshow" element={<CatShow />} />
        <Route path="/catnew" element={<CatNew />} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>

    </div>
  );
}

export default App;
