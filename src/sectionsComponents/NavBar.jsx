/* eslint-disable no-unneeded-ternary */
import React, { Component } from "react";
import "./css/navBar.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import imgLogo from "../img/logo-white.png";

import OverlayMenu from "./components/OverlayMenu";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { menu } = this.state;
    const boolForInsert = menu ? false : true;
    this.setState({
      menu: boolForInsert,
    });
  }

  render() {
    const { menu } = this.state;
    return (
      <>
        <nav>
          <Link
            offset={-4500}
            to="home"
            smooth
            duration={1000}
          >
            <img id="home" src={imgLogo} alt="imagem do logo da empresa clewsat rastreamento." />
          </Link>
          <aside className="menu-nav">
            <ul>
              <li>
                <Link
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
                  offset={80}
                  to="aplicativo"
                  smooth
                  duration={1000}
                >
                  Nosso aplicativo
                </Link>
              </li>
              <li>
                <Link
                  offset={-120}
                  to="depoimentos"
                  smooth
                  duration={1000}
                >
                  Depoimentos de clientes
                </Link>

              </li>
              <li>
                <Link
                  offset={-120}
                  to="planos"
                  smooth
                  duration={1000}
                >
                  Planos e preços
                </Link>
              </li>
            </ul>
          </aside>
          <button aria-label="Abrir ou fechar menu" name="menu" id="menu" onClick={this.handleClick} type="button">
            { !menu ? <FontAwesomeIcon icon={faBars} />
              : <FontAwesomeIcon icon={faTimes} />}
          </button>
        </nav>
        {menu && <OverlayMenu closeMenu={this.handleClick} />}
      </>
    );
  }
}

export default NavBar;
