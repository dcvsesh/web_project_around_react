export default function ImagePopup(props){
  return (
    <>

          <img src={props.link} alt="" className="popup__image_image" />
          <p className="popup__image_name">{props.name}</p>
    </>
  );
}
