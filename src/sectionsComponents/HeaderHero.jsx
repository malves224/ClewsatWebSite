import React, { Component } from "react";
import "./css/headerHero.css";
import { heroText } from "../textData";
import imgMockup from "../img/mockup-hero.png";
import ButtonHireNow from "./components/ButtonHireNow";

class HeaderHero extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <header className="hero">
        <img src={imgMockup} alt="um carro e uma moto, e um celular com o app" />
        <h1>{ heroText.title }</h1>
        <p id="paragraph">{ heroText.paragraph }</p>
        <ButtonHireNow />
      </header>
    );
  }
}

export default HeaderHero;
