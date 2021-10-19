import React, { PureComponent } from "react";
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
        <Button src="http://www.clewsat.com.br/para-empresa" text="Saiba Mais" />
      </section>
    );
  }
}

export default CalledFrota;
