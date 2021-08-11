import logo from './logo.svg';
import './App.css';
import ButtonCounter from './components/ButtonCounter';
import ImageClickable from './components/ImageClickable';

function App() {
  return (
    <div className="App">
      <fieldset>
        <legend>Кнопки</legend>
        <ButtonCounter text="первый" />
        <ButtonCounter />
      </fieldset>
      <fieldset>
        <legend>Изображения</legend>
        <ImageClickable />
        <ImageClickable />
      </fieldset>
    </div>
  );
}

export default App;
