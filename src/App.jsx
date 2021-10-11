import React from "react";
import NavBar from "./sectionsComponents/NavBar";
import HeaderHero from "./sectionsComponents/HeaderHero";
import Differences from "./sectionsComponents/Differences";
import AppTech from "./sectionsComponents/AppTech";
import GoogleEvidence from "./sectionsComponents/GoogleEvidence";
import CalledFrota from "./sectionsComponents/CalledFrota";
import PlansPrice from "./sectionsComponents/PlansPrice";
import CalledEnd from "./sectionsComponents/CalledEnd";

function App() {
  return (
    <body className="App">
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
    </body>
  );
}

export default App;
