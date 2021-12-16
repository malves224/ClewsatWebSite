import React, { PureComponent } from "react";
import illustracao from "../img/ilustração_empresas.svg";
import Button from "./components/Button";
import { textsRedColor, businessCall } from "../textData";
import "./css/calledFrota.css";

class CalledFrota extends PureComponent {
  render() {
    return (
      <section className="called-frota">
        <h2>
          {businessCall.title}
          {" "}
          <span>{textsRedColor.company}</span>
        </h2>
        <p>
          {businessCall.subtitle}
        </p>
        <img src={illustracao} alt="illustraçao de uma area de trabalho" />
        <Button src="https://bit.ly/3bSLBBa" text="Saiba Mais" />
      </section>
    );
  }
}

export default CalledFrota;
