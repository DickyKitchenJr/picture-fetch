import React from "react";
import { useState } from "react";
import "./PictureFlip.css";
import Greeting from "./Greeting";
import RandomImages from "./RandomImages";
import CatImages from "./CatImages";
import DogImages from "./DogImages";

// GOAL: = to retrieve images from unsplash api and display new images when a button is clicked

function PictureFlip() {
  const [radioSelect, setRadioSelect] = useState("random");

  const handleChange = (e) => {
    setRadioSelect(e.target.value);
  };

  return (
    <>
      <Greeting />
      <div className="radio-buttons">
        <label>
          <input
            type="radio"
            name="pictureSelect"
            value="random"
            checked={radioSelect === "random"}
            onChange={handleChange}
          ></input>
          Random
        </label>
        <label>
          <input
            type="radio"
            name="pictureSelect"
            value="cats"
            checked={radioSelect === "cats"}
            onChange={handleChange}
          ></input>
          Cats
        </label>
        <label>
          <input
            type="radio"
            name="pictureSelect"
            value="dogs"
            checked={radioSelect === "dogs"}
            onChange={handleChange}
          ></input>
          Dogs
        </label>
      </div>
      <p>
        All Pictures Provided Through:{" "}
        <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
          UnSplash
        </a>
      </p>
      {radioSelect === "random" ? <RandomImages /> : null}
      {radioSelect === "cats" ? <CatImages /> : null}
      {radioSelect === "dogs" ? <DogImages /> : null}
    </>
  );
}

export default PictureFlip;
