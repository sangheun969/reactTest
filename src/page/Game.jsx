import React, { useEffect, useState } from "react";

import { Boom } from "../components/Boom";

export const Game = () => {
  const [booms, setBooms] = useState([]);
  useEffect(() => {
    // mount 최초의 한번만 실해되고 끝 [] 빈배열이니까
    //[] => render => 최초에는 빈배열이 렌더링되고 => 상태변수가 변경되어서 리렌더링
    const temp = new Array(8);
    for (let i = 0; i < temp.length; i++) {
      temp[i] = <Boom />;
    }
    setBooms(temp);
  }, []);
  return <div>{booms}</div>;
};
