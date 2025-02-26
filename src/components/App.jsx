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

//Cartas
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  //Likes
  async function handleCardLike(card) {
   // Verifica una vez más si a esta tarjeta ya les has dado like
  const isLiked = card.isLiked;
   // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
  await api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
  setCards((state) => state.map((currentCard) => currentCard._id === card._id ? newCard : currentCard));
  }).catch((error) => console.error(error));
 }

 //Eliminar targetas
async function handleCardDelete(card){
await api.deleteCard(card._id).then(() => {
  setCards((state) => state.filter((currentCard) => currentCard._id !== card._id));
  }).catch((error) => console.error(error));
  }


  return (
    <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser, onUpdateAvatar:handleUpdateAvatar}}>
     <div className="page">
<Header/>
   <Main
    cards={cards}
    onCardLike={handleCardLike}
    onCardDelete={handleCardDelete} 
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
