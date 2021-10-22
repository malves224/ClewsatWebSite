/* eslint-disable react/jsx-filename-extension */
import React from "react";
import "./css/plansPrice.css";
import { plansPrices } from "../textData";
import PlanCard from "./components/PlanCard";

function PlansPrice() {
  return (
    <section className="plans-price">
      <h2>{plansPrices.title}</h2>
      <div className="carrousel-plans">
        {plansPrices.plansCard.map((plan) => <PlanCard key={plan.plan} plan={plan} />)}
      </div>
    </section>
  );
}

export default PlansPrice;
