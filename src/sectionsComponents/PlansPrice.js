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
    const { current: { offsetWidth } } = carrousel;
    carrousel.current.scrollLeft += offsetWidth;
  }

  const handleClickNext = () => {
    const offSet = carrousel.current.offsetWidth;
    const addScrollValue = offSet;
    carrousel.current.scrollLeft += addScrollValue;
  };

  const handleClickPrevious = () => {
    const offSet = carrousel.current.offsetWidth;
    const addScrollValue = offSet;
    carrousel.current.scrollLeft -= addScrollValue;
  };

  useLayoutEffect(() => setScroll());

  function renderCarrousel() {
    return (
      <div className="carrousel-content">
        <button
          className="button-navegation"
          onClick={handleClickPrevious}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <div ref={carrousel} className="carrousel-plans">
          {plansPrices.plansCard.map((plan) => <PlanCard key={plan.plan} plan={plan} />)}
        </div>
        <button
          className="button-navegation"
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
