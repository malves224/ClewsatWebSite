/* eslint-disable react/jsx-filename-extension */
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import EvidenceCard from "./Evidence";
import "../css/carrouselDeposition.css";

function Carrousel(dataArr) {
  const carrousel = useRef(null);
  const [data] = dataArr;

  const handleClickNext = () => {
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  const handleClickPrevious = () => {
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };

  return (
    <div className="carrousel">
      <div>
        <button
          onClick={handleClickPrevious}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div ref={carrousel} id="cards-carrousel">
        {data.map((deposition) => (
          <EvidenceCard
            key={deposition.namePeople}
            deposition={deposition}
          />
        ))}
      </div>
      <div>
        <button
          onClick={handleClickNext}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
