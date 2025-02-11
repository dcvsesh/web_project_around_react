export default function EditProfile() {
  return (
    <>
      <label className="form__field">
        <input
          className="input__text input__text_name"
          type="text"
          name="name"
          id="name-input"
          value="Jacques Cousteau"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error name-input-error"></span>
      </label>
      <label className="form__field">
        <input
          className="input__text input__text_about"
          type="text"
          name="about"
          id="about-input"
          value="Explorador"
          placeholder="Acerca de mí"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error about-input-error"></span>
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
