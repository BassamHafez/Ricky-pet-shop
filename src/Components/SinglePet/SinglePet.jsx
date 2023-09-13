import React from "react";
import { useSelector } from "react-redux";

const SinglePet = () => {
  const info = useSelector((state) => state.singlePet.data);

  return (
    <div className="bg-danger d-flex justify-content-center align-items-center">
      <span>{info.country}</span>
      <div>
        <div>
          <img src={info.src} alt="" />
        </div>
        <div>
                    
        <h1>{info.name}</h1>
          <p>{info.desc}</p>
          <span>{info.life}</span>
        </div>
        <div>
          <a href={info.wiki} target="_blank" rel="noreferrer">wiki</a>
          <a href={info.vcahospitals_url}>vcahospitals</a>
          <a href={info.vetstreet_url}>vetstreet</a>
        </div>
        <div>
          <div>
            <span>{info.adaptability}</span>
          </div>
          <div>
            <span>{info.intelligence}</span>
          </div>
          <div>
            <span>{info.energy_level}</span>
          </div>
          <div>
            <span>{info.social_needs}</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SinglePet;
