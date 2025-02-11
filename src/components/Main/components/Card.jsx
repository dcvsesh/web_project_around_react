import trashButton from "../../../images/trash_icon.svg"
import ImagePopup from "./ImagePopup";

export default function Card(props){
const {name, link, isLiked} = props.card;
const{handleOpenPopup}= props
const imageComponent = {title:"",children:<ImagePopup name={name} link={link}/>}


  return (
    <li className="cards__item">
            <img src={link} alt="" className="cards__image" onClick={() => handleOpenPopup(imageComponent)}></img>
            <button className="cards__trash-button" aria-label="Delete card" type="button">
              <img
                src={trashButton}
                alt="trash picture"
                className="cards__trash-button-image"
              />
            </button>
            <div className="cards__image-info">
              <h3 className="cards__image-text">{name}</h3>
              <button className="cards__hearth-button" aria-label="Like card" type="button"></button>
            </div>
          </li>
  );
}