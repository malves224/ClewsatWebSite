import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes, faCheck,
} from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";
import Button from "./Button";
import { buttonHireNow } from "../../textData";
import "../css/planCard.css";

export default class PlanCard extends PureComponent {
  render() {
    const {
      plan: {
        plan, price, recurrence, benefits, promotional,
      },
    } = this.props;
    // console.log(benefits(plan));
    return (
      <div className="item-plan">
        <header className={promotional.status ? "header-promotional" : "header-no-promotional"}>
          <h3>{plan}</h3>
          <div className="price-plan">
            <h4>{price}</h4>
            <p>{recurrence}</p>
          </div>
        </header>
        <body className="body-item">
          <ol className="list-benefits">
            {benefits(plan)
              .map(({ textBenefits, status }) => (
                <li className={status ? "benefit-check benefit" : "benefit-No benefit"}>
                  <FontAwesomeIcon icon={status ? faCheck : faTimes} />
                  {" "}
                  {textBenefits}
                </li>
              ))}
          </ol>
          <Button src={buttonHireNow.src} text={buttonHireNow.text} />
        </body>
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
