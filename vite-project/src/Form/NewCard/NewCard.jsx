export default function NewCard(){
  return (
<>
<label className="form__field">
                <input
                  className="input__text input__text_place"
                  type="text"
                  name="place"
                  id="place-input"
                  placeholder="Título"
                  minLength="2"
                  maxLength="30"
                  required
                />
                <span className="form__input-error place-input-error"></span>
              </label>
              <label className="form__field">
                <input
                  className="input__text input__text_link"
                  type="url"
                  name="link"
                  id="link-input"
                  placeholder="Enlace a la imagen"
                  required
                />
                <span className="form__input-error link-input-error"></span>
              </label>

              <div className="popup_submit-button">
      <button
        className="popup__form-button popup__save-button"
        type="submit"
      >
        Crear
      </button>
      </div>
              </>
  )
}