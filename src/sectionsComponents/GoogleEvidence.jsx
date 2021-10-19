/* eslint-disable class-methods-use-this */
import React, { PureComponent } from "react";
import "./css/googleEvidence.css";
import fiveStar from "../img/google-rate.svg";
import { googleEvidence } from "../textData";
import CarrouselDeposition from "./components/CarrouselDeposition";

class GoogleEvidence extends PureComponent {
  render() {
    const { title } = googleEvidence;
    return (
      <section className="google-evidence">
        <div id="title-google">
          <h2>{title}</h2>
          <img src={fiveStar} alt="5 estrelas do google" />
        </div>
        <CarrouselDeposition />
      </section>
    );
  }
}

export default GoogleEvidence;
