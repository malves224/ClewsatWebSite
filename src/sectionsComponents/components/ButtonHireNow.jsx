import React, { PureComponent } from "react";
import { buttonHireNow } from "../../textData";
import "../css/button.css";

class ButtonHireNow extends PureComponent {
  render() {
    return (
      <div className="div-button">
        <a href={buttonHireNow.src} target="_blank" rel="noreferrer">
          <button id="button" type="button"><p id="text-button">{ buttonHireNow.text }</p></button>
        </a>
      </div>
    );
  }
}

export default ButtonHireNow;
