import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="gamePage">
      <div className="mainTitle">Main</div>
      <div className="allGame">
        <span className="gameList">
          <Link to={"/game"}>폭탄 팡팡</Link>
        </span>
        <span className="gameList">
          <Link to={"/game2"}>가위바위보</Link>
          <img src="" alt="" />
        </span>
        <span className="gameList">
          <Link to={"/game3"}>지뢰 찾기</Link>
        </span>
      </div>
    </div>
  );
};

export default Main;
