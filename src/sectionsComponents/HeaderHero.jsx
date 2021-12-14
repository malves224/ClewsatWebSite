import React, { Component } from "react";
import "./css/headerHero.css";
import { Link } from "react-scroll";
import { heroText, buttonHireNow } from "../textData";
import imgMockup from "../img/mockup-hero.webp";
import Button from "./components/Button";

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
        <div className="call-hero">
          <h1>{ heroText.title }</h1>
          <p id="paragraph">{ heroText.paragraph }</p>
          <Button src={buttonHireNow.src} text={buttonHireNow.text} />
        </div>
        <div className="hero-plans">
          <h3>
            Planos a partir de:
            <br />
            <span>R$54,90 Mensal</span>
          </h3>
          <Link
            to="planos"
            smooth
            duration={1000}
            offset={-120}
          >
            <Button src={null} text="Veja os planos" />
          </Link>
        </div>
      </header>
    );
  }
}

export default HeaderHero;
