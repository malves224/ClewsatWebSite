import React, { PureComponent } from "react";
import "./css/plansPrice.css";
import { plansPrices } from "../textData";
import PlanCard from "./components/PlanCard";

class PlansPrice extends PureComponent {
  render() {
    return (
      <div>
        {plansPrices.plansCard.map((plan) => <PlanCard key={plan.plan} plan={plan} />)}
      </div>
    );
  }
}

export default PlansPrice;
