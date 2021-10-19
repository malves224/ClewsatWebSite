import React, { Component } from "react";
import "./css/appTech.css";
import mockupApp from "../img/iphone-mockup.png";
import gifApp from "../img/gif-operation-app.gif";
import { appTech, textsRedColor } from "../textData";
import ButtonHireNow from "./components/ButtonHireNow";

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
      <div className="app-tech">
        <aside className="tech">
          <h2>{appTech.title}</h2>
          <p>{appTech.description}</p>
          <img id="phone-img" src={mockupApp} alt="Imagen smartphone com o uso app de rastreamento." />
          <img id="app-gif" src={gifApp} alt="animação do aplicaivo" />
        </aside>
        <section className="about-app">
          <h3>{appTech.subtitle}</h3>
          <h4>{appTech.mainFunctionText}</h4>
          {texts.map((text, index) => (
            <p key={text} className="paragraph">
              <span>{textsRedColor[keysRedTexts[index + 1]]}</span>
              {" "}
              {text}
            </p>
          ))}
          <ButtonHireNow />
        </section>
      </div>
    );
  }
}

export default AppTech;
