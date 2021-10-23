import React, { PureComponent } from "react";
import { calledEnd, buttonHireNow } from "../textData";
import Button from "./components/Button";
import "./css/calledEnd.css";

class CalledEnd extends PureComponent {
  render() {
    return (
      <div>
        <aside>
          <div className="called-end-container">
            <h2>
              <span id="clw">Clewsat Rastreamento, </span>
              {calledEnd.title}
            </h2>
            <Button src={buttonHireNow.src} text={buttonHireNow.text} />
          </div>
        </aside>
      </div>
    );
  }
}

export default CalledEnd;
