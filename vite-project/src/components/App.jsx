import { useState } from 'react'
import viteLogo from '/vite.svg'

import Header from '../Header/Header'
import Footer from "../Footer/Footer"
import Main from "../Main/Main"
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
