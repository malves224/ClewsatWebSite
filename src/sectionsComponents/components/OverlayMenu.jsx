import React, { PureComponent } from "react";
import "../css/overlayMenu.css";

class OverlayMenu extends PureComponent {
  render() {
    return (
      <aside className="overlay">
        <ul className="list-menu">
          <li><button type="button">Diferencias</button></li>
          <li>Nosso aplicativo</li>
          <li>Depoimentos de clientes</li>
          <li>Planos e preços</li>
        </ul>
      </aside>
    );
  }
}

export default OverlayMenu;
