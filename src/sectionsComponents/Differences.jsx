import React, { PureComponent } from "react";
import "./css/differences.css";
import { differences, textsRedColor } from "../textData";

class Differences extends PureComponent {
  render() {
    return (
      <main className="differences">
        <h1>
          {differences.title}
          {" "}
          <span>
            { textsRedColor.clewsat }
            .
          </span>
        </h1>
      </main>
    );
  }
}

export default Differences;
