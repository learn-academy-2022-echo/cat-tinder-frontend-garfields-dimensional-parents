import React, { useState } from 'react'
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
import mockCats from './mockCats'


const App = () => {
  const [cats, setCats] = useState(mockCats)
  console.log(cats)

  const createCat = (cat) => {
    console.log("Cat has been created", cat)
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/catindex" element={<CatIndex cats={cats} />} />
        <Route path="/catshow/:id" element={<CatShow cats={cats} />} />
        <Route path="/catnew" element={<CatNew createCat={createCat}/>} />
        <Route path="/catedit" element={<CatEdit />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
