import React, { PureComponent } from "react";
import "../css/overlayMenu.css";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

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
          <li>
            <Link
              onClick={this.handleClick}
              offset={-70}
              to="diferencias"
              smooth
              duration={1000}
            >
              Diferencias
            </Link>
          </li>
          <li>
            <Link
              onClick={this.handleClick}
              offset={160}
              to="aplicativo"
              smooth
              duration={1000}
            >
              Nosso aplicativo
            </Link>
          </li>
          <li>
            <Link
              onClick={this.handleClick}
              offset={-50}
              to="depoimentos"
              smooth
              duration={1000}
            >
              Depoimentos de clientes
            </Link>

          </li>
          <li>
            <Link
              onClick={this.handleClick}
              offset={-80}
              to="planos"
              smooth
              duration={1000}
            >
              Planos e preços
            </Link>
          </li>
        </ul>
      </aside>
    );
  }
}

OverlayMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};

export default OverlayMenu;
