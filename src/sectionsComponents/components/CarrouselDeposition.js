/* eslint-disable react/jsx-filename-extension */
import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import EvidenceCard from "./EvidenceCard";
import { googleEvidence } from "../../textData";
import "../css/carrouselDeposition.css";

function Carrousel() {
  const carrousel = useRef(null);

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
          aria-label="Anterior"
          onClick={handleClickPrevious}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
      </div>
      <div ref={carrousel} id="cards-carrousel">
        {googleEvidence.depositions.map((deposition) => (
          <EvidenceCard
            key={deposition.namePeople}
            deposition={deposition}
          />
        ))}
      </div>
      <div>
        <button
          aria-label="Proximo"
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
