/* eslint-disable class-methods-use-this */
import React, { useRef } from "react";
import "./css/googleEvidence.css";
import fiveStar from "../img/google-rate.svg";
import Evidence from "./components/Evidence";
import { googleEvidence } from "../textData";

function GoogleEvidence() {
  const carrousel = useRef(null);

  const handleClickNext = () => {
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  const handleClickPrevious = () => {
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };

  const { title, depositions } = googleEvidence;
  return (
    <section className="google-evidence">
      <div id="title-google">
        <h2>{title}</h2>
        <img src={fiveStar} alt="5 estrelas do google" />
      </div>
      <div className="carrousel">
        <div><button onClick={handleClickPrevious} type="button">previous</button></div>
        <div ref={carrousel} id="cards-carrousel">
          {depositions.map((deposition) => (
            <Evidence
              key={deposition.namePeople}
              deposition={deposition}
            />
          ))}
        </div>
        <div><button onClick={handleClickNext} type="button">next</button></div>
      </div>
    </section>
  );
}

export default GoogleEvidence;
