import React, { PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes, faCheck,
} from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import imgBlackFriday from "../../img/selo-blackFriday.svg";
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
    const { status, pricePromotional } = promotional;
    return (
      <section className="item-plan">
        <header className={status ? "header-promotional" : "header-no-promotional"}>
          <div className={status ? "blackFriday" : ""}>
            <h3>{plan}</h3>
            {status && <img src={imgBlackFriday} alt="selo black Frydai" />}
          </div>
          <div className={status ? "price-current-content" : ""}>
            <h4 className={status ? "price-previous" : ""}>{price}</h4>
            {status && <span className={status ? "price-current" : ""}>{pricePromotional}</span> }
            <p>{recurrence}</p>
          </div>
        </header>
        <article className="body-item">
          <ol className="list-benefits">
            {benefits(plan)
              .map(({ textBenefits, status: statusBene }) => (
                <li key={textBenefits} className={statusBene ? "benefit-check benefit" : "benefit-No benefit"}>
                  <FontAwesomeIcon icon={statusBene ? faCheck : faTimes} />
                  {" "}
                  {textBenefits}
                </li>
              ))}
          </ol>
          <Button src={buttonHireNow.src} text={buttonHireNow.text} />
        </article>
      </section>
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
