import React, { PureComponent } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import "../css/planCard.css";

export default class PlanCard extends PureComponent {
  render() {
    const {
      plan: {
        plan, price, recurrence, benefits,
      },
    } = this.props;
    console.log(benefits(plan));
    return (
      <div className="item-plan">
        <header className="header-plan">
          <h3>{plan}</h3>
          <div className="price-plan">
            <h4>{price}</h4>
            <p>{recurrence}</p>
          </div>
        </header>
      </div>
    );
  }
}

PlanCard.propTypes = {
  plan: PropTypes.shape({
    plan: PropTypes.string,
    price: PropTypes.string,
    recurrence: PropTypes.string,
    // eslint-disable-next-line react/forbid-prop-types
    promotional: PropTypes.object,
    benefits: PropTypes.func,
  }).isRequired,
};
