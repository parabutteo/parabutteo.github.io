import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Привет!
        </p>
        <p>
          Меня зовут Николай (@nikolai_konushkov), я разработчик интерфейсов в компании СберКорус.
        </p>
        <p>
          Пишу на TypeScript, пользуюсь React.
        </p>
        <p>
          Знаком с JS, поверхностно знаю Angular. Есть опыт настройки Webpack и работы c Sass.
        </p>
        <p>
          Хочу углубить познания в ReactJS для написания более осмысленного и функционального кода.
        </p>
      </header>
    </div>
  );
}

export default App;
