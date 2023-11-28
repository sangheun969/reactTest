import React, { useState, useEffect } from "react";
import { RockImg, FlagImg, BoomActive } from "../img/landMine";

export const LandGame = () => {
  const [imageArray, setImageArray] = useState([]);
  const rockCount = 9;

  useEffect(() => {
    const rockArray = new Array(rockCount).fill(RockImg);
    setImageArray(rockArray);
  }, []);

  const onClickHandler = (index) => {
    if (imageArray[index] === RockImg) {
      const newArray = [...imageArray];
      newArray[index] =
        Math.random() < 0.5 ? FlagImg : checkAndReturnBoomActive(newArray);
      setImageArray(newArray);
    }
  };

  const checkAndReturnBoomActive = (arr) => {
    const boomActiveCount = arr.filter((img) => img === BoomActive).length;
    return boomActiveCount < 2 ? BoomActive : FlagImg;
  };

  return (
    <div
      className="landGame"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 50px)",
        gap: "5px",
      }}
    >
      {imageArray.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          onClick={() => onClickHandler(index)}
          style={{
            width: "60px",
            height: "60px",
            cursor: img === RockImg ? "pointer" : "default",
          }}
        />
      ))}
    </div>
  );
};
