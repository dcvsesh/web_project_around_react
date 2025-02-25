import { useState, useContext } from 'react';
import {CurrentUserContext} from '../../../contexts/CurrentUserContext';


export default function EditProfile() {
  const currentUser = useContext(CurrentUserContext); // Obtiene el objeto currentUser

  const [name, setName] = useState(currentUser.name); // Agrega la variable de estado para name
  const [description, setDescription] = useState(currentUser.about); // Agrega la variable de estado para description

  const handleNameChange = (event) => {
    setName(event.target.value); // Actualiza name cuando cambie la entrada
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value); // Actualiza description cuando cambie la entrada
  };

  return (
    <>
      <label className="form__field">
        <input
          className="input__text input__text_name"
          type="text"
          name="name"
          id="name-input"
          value={name} // Vincula name con la entrada
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          onChange={handleNameChange} // Agrega el controlador onChange
          required
        />
        <span className=" form__input-error name-input-error"></span>
      </label>
      <label className="form__field">
        <input
          className="input__text input__text_about"
          type="text"
          name="about"
          id="about-input"
          value={description}
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          onChange={handleDescriptionChange} // Agrega el controlador onChange
          required
        />
        <span className=" form__input-error about-input-error"></span>
      </label>

      <div className="popup_submit-button">
      <button
        className="popup__form-button popup__save-button"
        type="submit"
      >
        Guardar
      </button>
      </div>
    </>
  );
}
