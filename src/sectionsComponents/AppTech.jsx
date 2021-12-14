import React, { Component } from "react";
import "./css/appTech.css";
import mockupApp from "../img/iphone-mockup.avifs";
import gifApp from "../img/gif-operation-app.avifs";
import carImg from "../img/car-img.webp";
import { appTech, textsRedColor, buttonHireNow } from "../textData";
import Button from "./components/Button";

class AppTech extends Component {
  constructor() {
    super();
    this.state = {
      keysRedTexts: Object.keys(textsRedColor),
      texts: appTech.mainFunctions,
    };
  }

  render() {
    const { keysRedTexts, texts } = this.state;
    return (
      <div id="aplicativo" className="app-tech">
        <aside className="tech">
          <h2>{appTech.title}</h2>
          <p>{appTech.description}</p>
          <img className="mockup-app" id="phone-img" src={mockupApp} alt="Imagen smartphone com o uso app de rastreamento." />
          <img className="mockup-app" id="app-gif" src={gifApp} alt="animação do aplicaivo" />
        </aside>
        <div className="car-container">
          <img id="img-car" src={carImg} alt="imagem de um carro" />
        </div>
        <section className="about-app">
          <div className="description-app">
            <h3>{appTech.subtitle}</h3>
            <h4>{appTech.mainFunctionText}</h4>
            {texts.map((text, index) => (
              <p key={text} className="paragraph">
                <span>{textsRedColor[keysRedTexts[index + 1]]}</span>
                {" "}
                {text}
              </p>
            ))}
            <Button src={buttonHireNow.src} text={buttonHireNow.text} />
          </div>
        </section>
      </div>
    );
  }
}

export default AppTech;
