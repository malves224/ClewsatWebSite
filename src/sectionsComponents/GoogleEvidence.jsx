import React, { PureComponent } from "react";
import "./css/googleEvidence.css";
import fiveStar from "../img/google-rate.svg";

class GoogleEvidence extends PureComponent {
  render() {
    return (
      <section className="google-evidence">
        <h2>Depoimentos Google</h2>
        <img src={fiveStar} alt="" />
      </section>
    );
  }
}

export default GoogleEvidence;
