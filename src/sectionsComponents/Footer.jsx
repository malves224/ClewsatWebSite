import React, { PureComponent } from "react";
import "./css/footer.css";
import logoClw from "../img/logo-branco-.png";
import fbIcon from "../img/social-fb.png";
import instaIcon from "../img/social-instagram.png";

class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <div className="footer">
          <img src={logoClw} alt="logo da empressa clewsat rastreamento" />
          <div className="midias-container">
            <a href="https://www.facebook.com/ClewSat" target="_blank" rel="noreferrer">
              <img src={fbIcon} alt="icone do facebook" />
            </a>
            <a href="https://www.instagram.com/clewsat/" target="_blank" rel="noreferrer">
              <img src={instaIcon} alt="icone do instagram" />
            </a>
          </div>
          <p className="copyright">Copyright © 2021 Clewsat Rastreamento. All Rights Reserved |Developed by Matheus Alves.  </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
