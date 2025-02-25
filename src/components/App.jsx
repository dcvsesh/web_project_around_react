import { useState } from 'react'
import viteLogo from '/vite.svg'
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import Header from './Header/Header'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
function App() {
  const [currentUser, setCurrentUser] = useState();
  return (
    <>
     <div className="page">
      <CurrentUserContext.Provider value={[currentUser]}>
<Header/>
   <Main />
<Footer />
</CurrentUserContext.Provider>
    </div>
    </>
  )
}

export default App
