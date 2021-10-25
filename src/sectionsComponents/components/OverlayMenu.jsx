import React, { PureComponent } from "react";
import "../css/overlayMenu.css";
import PropTypes from "prop-types";

class OverlayMenu extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { closeMenu } = this.props;
    closeMenu();
  }

  render() {
    return (
      <aside className="overlay">
        <ul className="list-menu">
          <li><a onClick={this.handleClick} href="#diferencias">Diferencias</a></li>
          <li>Nosso aplicativo</li>
          <li>Depoimentos de clientes</li>
          <li>Planos e preços</li>
        </ul>
      </aside>
    );
  }
}

OverlayMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default OverlayMenu;
