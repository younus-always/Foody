import React from 'react'
import Navber from './components/Navber/Navber'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import MainSection from './components/MainSection/MainSection'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <Navber></Navber>
      <Hero></Hero>
      <MainSection></MainSection>
      <Footer></Footer>
    </div>
  )
}
