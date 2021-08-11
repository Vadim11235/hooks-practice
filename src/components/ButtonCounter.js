import {useState} from 'react';
import './ButtonCounter.css';

export default function ButtonCounter({text="click me"}) {
  const [count, setCount] = useState(0);

  const handleClick = () => () => {
    setCount(count + 1);
  };

  return (
    <button className="ButtonCounter" onClick={handleClick()}>{text}: {count}</button>
  );
}