import avatar from "../images/avatar.jpg"
import editButton from "../images/edit_button.png"
import addButton from "../images/add.svg"

import {useState} from "react";
import NewCard from "../Form/NewCard/NewCard";
import Popup from "./components/Popup";
import EditAvatar from "../Form/EditAvatar/EditAvatar";
import EditProfile from "../Form/EditProfile/EditProfile";
import Card from "./components/Card";


const cards = [
  {
    isLiked: false,
    _id: '5d1f0611d321eb4bdcd707dd',
    name: 'Yosemite Valley',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:10:57.741Z',
  },
  {
    isLiked: false,
    _id: '5d1f064ed321eb4bdcd707de',
    name: 'Lake Louise',
    link: 'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg',
    owner: '5d1f0611d321eb4bdcd707dd',
    createdAt: '2019-07-05T08:11:58.324Z',
  },
];

console.log(cards);


export default function Main(){
  const [popup, setPopup] = useState(null);
  const newCardPopup = {title: "Nuevo Lugar", children:<NewCard/>}
  function handleOpenPopup (popup){
    setPopup(popup)
  }
  function handleClosePopup() {
    setPopup(null);
  }

  const editAvatarPopup = {title: "Cambiar foto de perfil", children:<EditAvatar/>}

  const editProfilePopup = {title: "Editar Perfil", children:<EditProfile/>}



  return(
    <main className="content">
    <section className="profile">
      <div className="profile__column">
        <div className="profile__avatar-edit"  onClick={() => handleOpenPopup(editAvatarPopup)}>
          <img
            src={avatar}
            alt="Avatar"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h2 className="profile__info_title">Jacques Cousteau</h2>
          <button className="profile__edit-button" type="button" aria-label="Edit profile" onClick={() => handleOpenPopup(editProfilePopup)}>
            <img
              src={editButton}
              alt="Botón para editar"
              className="profile__edit-button-image"
            />
          </button>
          <p className="profile__info_subtitle">Explorador</p>
        </div>
      </div>
      <button className="profile__add-button" type="button" aria-label="Add card" onClick={() => handleOpenPopup(newCardPopup)}>
        <img
          src={addButton}
          alt="Botón para añadir"
          className="profile__add-button-image"
        />
      </button>
    </section>
    <section className="cards">
      <ul className="cards__content">
      {cards.map((card) => (
      <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup}/>
    ))}
      </ul>
    </section>

    {popup && (
    <Popup
        onClose={handleClosePopup}
        title={popup.title}>
      {popup.children}
    </Popup>
  )}

  </main>
  );
  }