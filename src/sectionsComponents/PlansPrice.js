/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "./css/plansPrice.css";
import { plansPrices } from "../textData";
import PlanCard from "./components/PlanCard";

function PlansPrice() {
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
      <div className="carrousel-content">
        <button
          onClick={() => console.log("oi")}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        <div className="carrousel-plans">
          {plansPrices.plansCard.map((plan) => <PlanCard key={plan.plan} plan={plan} />)}
        </div>

        <button
          onClick={() => console.log("oi")}
          type="button"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>

      </div>
    </section>
  );
}

export default PlansPrice;
