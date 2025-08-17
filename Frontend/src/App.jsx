import { useState } from 'react'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Summary from "./pages/Summary";
import Footer from './components/Footer';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Page404 from './pages/Page404';
function App() {

  return (
    <div className='bg-gradient-to-b from-blue-100 to-cyan-100'> 
    <Header/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/summary/:id" element={<Summary />} />
        {/* <Route path="/share" element={<Share />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />

        <Route path="*" element={<Page404 />} />

      </Routes>
    <Footer/>
     </div>
  )
}

export default App
