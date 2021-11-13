/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from "react";
import ReactGA from "react-ga4";
import NavBar from "./sectionsComponents/NavBar";
import HeaderHero from "./sectionsComponents/HeaderHero";
import Differences from "./sectionsComponents/Differences";
import AppTech from "./sectionsComponents/AppTech";
import GoogleEvidence from "./sectionsComponents/GoogleEvidence";
import CalledFrota from "./sectionsComponents/CalledFrota";
import PlansPrice from "./sectionsComponents/PlansPrice";
import CalledEnd from "./sectionsComponents/CalledEnd";
import Footer from "./sectionsComponents/Footer";
import ButtonWpp from "./sectionsComponents/components/ButtonWpp";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-NJ8KWTZ84J");
    ReactGA.send("/");
  }, []);

  return (
    <>
      <ButtonWpp />
      <NavBar />
      <HeaderHero />
      <main>
        <Differences />
        <AppTech />
      </main>
      <GoogleEvidence />
      <CalledFrota />
      <PlansPrice />
      <CalledEnd />
      <Footer />
    </>
  );
}

export default App;