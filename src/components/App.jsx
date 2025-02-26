import { useState, useEffect } from 'react'
import viteLogo from '/vite.svg'
import Footer from "../components/Footer/Footer"
import Main from "../components/Main/Main"
import Header from './Header/Header'
import { CurrentUserContext } from '../contexts/CurrentUserContext'
import {api} from "../utils/api"


function App() {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    (async () => {
      await api.getUserInfo().then((data) => {
        setCurrentUser(data);
      });
    })();
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api
        .setUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
    api.profileImage(data)
      .then((newData) => {
        setCurrentUser(newData); // Actualizar el estado del usuario actual
        handleClosePopup(); // Cerrar el popup después de actualizar
      })
      .catch((error) => console.error(error));
  };

  const [popup, setPopup] = useState(null);
  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }



  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, onUpdateAvatar:handleUpdateAvatar}}>
     <div className="page">
<Header/>
   <Main
   onOpenPopup={handleOpenPopup}
   onClosePopup={handleClosePopup}
   popup={popup}
   />
<Footer />
    </div>
    </CurrentUserContext.Provider>

  )
}

export default App
