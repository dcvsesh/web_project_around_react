export default function EditAvatar() {
  return (
    <>
    <form className="form popup__form"
    noValidate
    onSubmit={handleSubmit}>
      <label className="form__field">
        <input
          className="input__text input__text_link"
          type="url"
          name="avatar"
          id="avatar-input"
          placeholder="Ingrese el nuevo enlace"
          required
        />
        <span className="form__input-error link-input-error"></span>
      </label>
      <div className="popup_submit-button">
      <button
        className="popup__form-button popup__save-button"
        type="submit"
      >
        Guardar
      </button>
      </div>
      </form>
    </>
  );
}
