import React, { useEffect, useState } from "react";
import Player from "../components/Player";
import { scissors, rock, paper } from "../img/rockScissorsPaper";
export const Game2 = () => {
  const [playerSelect, setPlayerSelect] = useState(null);
  const [comSelect, setComSelect] = useState(null);
  const [result, setResult] = useState("대기");

  const [selectedValue, setSelectedValue] = useState("");
  const [resultValue, setResultValue] = useState(15000);
  const [comValue, setComResultValue] = useState(15000);

  const playResult = parseInt(resultValue);
  const comResult = parseInt(comValue);

  const winResult = playResult + parseInt(selectedValue) * 2;
  const winComResult = comResult + parseInt(selectedValue) * 2;
  const loseResult = playResult - parseInt(selectedValue) * 2;
  const loseComResult = comResult - parseInt(selectedValue) * 2;

  const [clickCount, setClickCount] = useState(0);
  const maxClicks = 6;

  // 가위바위보

  // 1. 두명이 있어야된다. (플레이어, 컴퓨터)(컴포넌트 2개)(재사용성)
  // 2. 컴퓨터는 랜덤의 값을 보여줘야한다. (3가지의 경우의 수를 랜덤값을 만들어주는 함수)
  // 3. 가위인지 바위인지 보인지 값을 보여줄수있는 기능.(비교 승패 검증까지)

  // 객체로 만드는이유는 여러개의 데이터를 다루는 경우
  const select = {
    scissors: {
      name: "가위",
      imgPath: scissors,
    },
    rock: {
      name: "바위",
      imgPath: rock,
    },
    paper: {
      name: "보",
      imgPath: paper,
    },
  };

  // 컴퓨터의 랜덤 값 설정끝
  const comSelectHandler = () => {
    // 컴퓨터가 선택하는 랜덤값은 0~2 3가지의 경우의 수
    let arr = Object.keys(select); // ["scissors","rook","paper"]
    // console.log(arr);
    // 컴퓨터의 랜덤값
    let comRandom = Math.floor(Math.random() * 3); // 0~2 가지

    // ["scissors","rook","paper"][0]
    // select["scissors"]  랜덤값이 0이면은
    setComSelect(select[arr[comRandom]]);
  };

  const playerSelectHandler = (_select) => {
    setPlayerSelect(select[_select]);
    comSelectHandler();
    const searchValue = document.getElementById("searchValue").value;
    setClickCount((prevCount) => prevCount + 1);
    if (searchValue === "") {
      alert("판돈을 선택해주세요");
      window.location.reload();
    }
    if (clickCount >= maxClicks - 1) {
      // let isComfirm = confirm("5판 끝 이어서 하실거면 확인버튼 눌러주세요");
      alert("5판 끝 이어서 하실거면 확인버튼 눌러주세요");
      setClickCount(0);
    }
    if (result === "이겼음") {
      setResultValue(winResult);
      setComResultValue(loseComResult);
    } else if (resultValue < 999) {
      alert("Lose");
      setResultValue(15000);
      setComResultValue(15000);
    } else if (comValue < 999) {
      alert("Win");
      setResultValue(15000);
      setComResultValue(15000);
    } else if (resultValue == NaN) {
      alert("판돈을 선택해주세요");
    } else {
      setResultValue(loseResult);
      setComResultValue(winComResult);
    }
  };

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleButtonClick = () => {
    const inputValue = document.getElementById("searchValue");
    inputValue.value = selectedValue;

    const searchValue = document.getElementById("searchValue").value;

    if (!isNaN(searchValue)) {
      console.log("내결과", playResult);
      console.log("컴결과", comResult);
      setResultValue(playResult);
      setComResultValue(comResult);
      if (resultValue < 999) {
        alert("Lose");
        setResultValue(15000);
        setComResultValue(15000);
      } else if (comValue < 999) {
        alert("Win");
        setResultValue(15000);
        setComResultValue(15000);
      }
    } else if (resultValue == NaN) {
      alert("판돈을 선택해주세요");
    }
  };

  // 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트는 모두 리렌더링된다.

  // react의 라이프 사이클
  useEffect(() => {
    // mount 속성 막았음
    if (comSelect === null) return;
    resultHandler();
    // comSelect 가 업데이트 될때만
  }, [comSelect]);

  const resultHandler = () => {
    if (playerSelect.name === comSelect.name) {
      setResult("무승부");
    } else if (playerSelect.name === "가위") {
      let result = comSelect.name === "보" ? "이겼음" : "졌음";
      setResult(result);
    } else if (playerSelect.name === "바위") {
      let result = comSelect.name === "가위" ? "이겼음" : "졌음";
      setResult(result);
    } else if (playerSelect.name === "보") {
      let result = comSelect.name === "바위" ? "이겼음" : "졌음";
      setResult(result);
    }
  };
  return (
    <div className="border">
      <Player name={"유저"} select={playerSelect} result={result} />
      <Player name={"컴퓨터"} select={comSelect} result={result} />
      <div>
        <button
          onClick={() => {
            playerSelectHandler("scissors");
          }}
          className="playSelHand scissorBtn"
        >
          가위
        </button>
        <button
          onClick={() => {
            playerSelectHandler("rock");
          }}
          className="playSelHand rockBtn"
        >
          바위
        </button>
        <button
          onClick={() => {
            playerSelectHandler("paper");
          }}
          className="playSelHand paperBtn"
        >
          보
        </button>
        <div>
          <select className="userMoney" onChange={handleSelectChange}>
            <option>판돈</option>
            <option value={1000}>1000</option>
            <option value={2000}>2000</option>
            <option value={3000}>3000</option>
          </select>
          <input type="button" onClick={handleButtonClick} value="선택"></input>
        </div>
        <div className="rsp">
          <span className="rsp_wrap">
            <h3>판 돈</h3>
            <input type="text" id="searchValue" disabled />
            <p>내 총 금액</p>
            <input type="text" id="resultValue" value={resultValue} disabled />
            <p>컴퓨터 총 금액</p>
            <input type="text" id="comResultValue" value={comValue} disabled />
          </span>
        </div>
      </div>
    </div>
  );
};
