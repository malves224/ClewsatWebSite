import React, { PureComponent } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

export default class ButtonWpp extends PureComponent {
  render() {
    return (
      <>
        <div className="fade-up-button">
          <FloatingWhatsApp
            phone="+5511936186826"
            message="Olá, tenho interesse no sistema de rastreamento."
            size="45px"
            popupMessage="Olá, como podemos ajudar?"
            zIndex={100}
            autoOpenTimeout={35000}
          />
        </div>
      </>
    );
  }
}
