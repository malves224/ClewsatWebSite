import React, { PureComponent } from "react";
import "./css/differences.css";
import { differences, textsRedColor } from "../textData";
import CardDifferential from "./components/CardDifferential";

class Differences extends PureComponent {
  render() {
    const { cardsDifferences } = differences;
    return (
      <section className="differences">
        <h2>
          {differences.title}
          {" "}
          <span>
            { textsRedColor.clewsat }
            .
          </span>
        </h2>
        <p>
          {differences.description}
        </p>
        <aside className="cards-differential">
          { cardsDifferences.map((card) => (
            <CardDifferential key={card.title} differential={card} />
          ))}
        </aside>
      </section>
    );
  }
}

export default Differences;
