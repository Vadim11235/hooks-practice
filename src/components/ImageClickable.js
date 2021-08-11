import {useState} from 'react';
import './ImageClickable.css';
import day from '../images/day.jpg';
import night from '../images/night.jpg';

export default function ImageClickable() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => () => {
    setClicked(!clicked);
  };

  return (
    <div className="ImageClickable" onClick={handleClick()} tabIndex="0">
      <img src={clicked ? night : day} alt="photo" />
    </div>
  );
}