import React from "react";
import styles from "./DogsSelection.module.css";

const DogsSelection = (props) => {
  
  console.log("hi iam selector")
  const isDog = props.name === "dogType";
  return (
    <>
      {isDog ? (
        <div className={`${styles.select_type} my-5`}>
          <select name="dogs" id="dogs" onChange={props.runSelectHandler}>
            <option value={props.allDogs}>All Breeds</option>
            <option value="1">Affenpinscher</option>
            <option value="5">Akbash Dog</option>
            <option value="6">Akita</option>
            <option value="7">Alapaha Bulldog</option>
            <option value="8">Alaskan Husky</option>
            <option value="9">Alaskan Malamute</option>
            <option value="10">American Bulldog</option>
            <option value="12">American Eskimo</option>
            <option value="13">Miniature</option>
            <option value="14">Eskimo Dog</option>
            <option value="18">Shepherd Dog</option>
            <option value="19">Appenzeller</option>
            <option value="23">Australian Shepherd</option>
            <option value="24">Australian Terrier</option>
            <option value="101">English Setter</option>
            <option value="103">English Springer</option>
            <option value="111">Finnish Spitz</option>
            <option value="114"> German Pinscher </option>
            <option value="121">Golden Retriever</option>
            <option value="124">Great Dane</option>
            <option value="125">Great Pyrenees</option>
            <option value="130">Havanese</option>
          </select>
        </div>
      ) : (
        <div className={`${styles.select_type} my-5`}>
          <select name="cats" id="cats" onChange={props.runSelectHandler}>
            <option value={props.allCats}>All Breeds</option>
            <option value="asho">American Shorthair</option>
            <option value="bslo">British Longhair</option>
            <option value="bsho">British Shorthair</option>
            <option value="Cymr">Cymric</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="Bali">Balinese</option>
            <option value="Birm">Birman</option>
            <option value="Char">Chartreux</option>
            <option value="Khao">Khao Manee</option>
            <option value="aege">Aegean</option>
          </select>
        </div>
      )}
    </>
  );
};

export default DogsSelection;
