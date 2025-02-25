import avatar from "../../images/avatar.jpg";
import editButton from "../../images/edit_button.png";
import addButton from "../../images/add.svg";

import { useState, useEffect, useContext } from "react";
import NewCard from "../Form/NewCard/NewCard";
import Popup from "./components/Popup";
import EditAvatar from "../Form/EditAvatar/EditAvatar";
import EditProfile from "../Form/EditProfile/EditProfile";
import Card from "./components/Card";
import { api } from "../../utils/api";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

export default function Main() {
  const [popup, setPopup] = useState(null);
  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };
  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  const editAvatarPopup = {
    title: "Cambiar foto de perfil",
    children: <EditAvatar />,
  };
  const editProfilePopup = {
    title: "Editar Perfil",
    children: <EditProfile />,
  };

  //Cartas
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards().then((data) => {
      setCards(data);
    });
  }, []);

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__column">
          <div
            className="profile__avatar-edit"
            onClick={() => handleOpenPopup(editAvatarPopup)}
          >
            <img
              src={currentUser.avatar}
              alt="Imagen de Perfil Avatar"
              className="profile__avatar"
            />
          </div>
          <div className="profile__info">
            <h2 className="profile__info_title">{currentUser.name}</h2>
            <button
              className="profile__edit-button"
              type="button"
              aria-label="Edit profile"
              onClick={() => handleOpenPopup(editProfilePopup)}
            >
              <img
                src={editButton}
                alt="Botón para editar"
                className="profile__edit-button-image"
              />
            </button>
            <p className="profile__info_subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="Add card"
          onClick={() => handleOpenPopup(newCardPopup)}
        >
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
            <Card
              key={card._id}
              card={card}
              handleOpenPopup={handleOpenPopup}
            />
          ))}
        </ul>
      </section>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
