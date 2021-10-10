import React, { PureComponent } from "react";
import "../css/overlayMenu.css";

class OverlayMenu extends PureComponent {
  render() {
    return (
      <aside>
        <ul className="list-menu">
          <li>Diferencias</li>
          <li>Nosso aplicativo</li>
          <li>Depoimentos de clientes</li>
          <li>Planos e preços</li>
        </ul>
      </aside>
    );
  }
}

export default OverlayMenu;
