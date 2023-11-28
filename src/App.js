// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Game } from "./page/Game";
import { Game2 } from "./page/Game2";
import { Game3 } from "./page/Game3";
import Main from "./page/Main";
import Login from "./page/Login";

function App() {
  // 폭턴 컴포넌트
  // 컴포넌트를 누르면 폭탄이 펑 하고 터지는 이미지를 보여주저보자

  const test = () => {
    switch (1) {
      case 1:
        break;

      default:
        break;
    }
  };
  /** Route에는 작성해야할 속성값이 두개 있는데
   * path : 브라우저의 경로 (url 1조건값)
   element : path 조건에 충족했을때 컴포넌트 
  */
  return (
    <div className="App">
      <Routes>
        {}

        <Route path="/" element={<Main />} />

        <Route path="/game" element={<Game />} />

        <Route path="/login" element={<Login />} />
        <Route path="/game2" element={<Game2 />} />
        <Route path="/game3" element={<Game3 />} />
      </Routes>
    </div>
  );
}

export default App;
