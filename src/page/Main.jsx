import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      Main
      <Link to={"/game"}>폭탄 팡팡</Link>
      <br />
      <Link to={"/game2"}>가위바위보</Link>
      <br />
      <Link to={"/game3"}>지뢰 찾기</Link>
    </div>
  );
};

export default Main;
