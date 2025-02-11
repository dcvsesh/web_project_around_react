import { useState } from 'react'
import viteLogo from '/vite.svg'
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import Header from './Header/Header'
function App() {
  return (
    <>
     <div className="page">
<Header/>
   <Main />
<Footer />
    </div>
    </>
  )
}

export default App
