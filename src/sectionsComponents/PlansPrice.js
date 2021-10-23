/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-filename-extension */
import React, { useRef, useLayoutEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./css/plansPrice.css";
import { plansPrices } from "../textData";
import PlanCard from "./components/PlanCard";

function PlansPrice() {
  const carrousel = useRef(null);
  function setScroll() {
    const { current: { scrollLeft, offsetWidth } } = carrousel;
    carrousel.current.scrollLeft += offsetWidth;
  }

  const handleClickNext = () => {
    console.log(carrousel);
    carrousel.current.scrollLeft += carrousel.current.offsetWidth;
  };

  const handleClickPrevious = () => {
    carrousel.current.scrollLeft -= carrousel.current.offsetWidth;
  };
  useLayoutEffect(() => setScroll());
  function renderCarrousel() {
    const { current } = carrousel;
    return (
      <div className="carrousel-content">
        <button
          onClick={handleClickPrevious}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div ref={carrousel} className="carrousel-plans">
          {plansPrices.plansCard.map((plan) => <PlanCard key={plan.plan} plan={plan} />)}
        </div>
        <button
          onClick={handleClickNext}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    );
  }
  return (
    <section className="plans-price">
      <header className="header-plans">
        <h2>{plansPrices.title}</h2>
        <p>Escolha seu plano</p>
        <div className="blackfriday-text">
          <h3>BLACK FRIDAY</h3>
          <p id="blackfriday-p">DE VERDADE</p>
        </div>
      </header>
      {renderCarrousel()}
    </section>
  );
}

export default PlansPrice;
