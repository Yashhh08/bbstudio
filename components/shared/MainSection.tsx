"use client";

import React, { useState } from "react";
import TaxiSection from "./TaxiSection";
import MetroSection from "./MetroSection";

const MainSection = () => {
  const [enter, setEnter] = useState(true);

  const handleEnter = () => {
    setEnter(true);
  };

  return (
    <div className="">
      {!enter && <TaxiSection handleEnter={handleEnter} />}
      {enter && <MetroSection />}
    </div>
  );
};

export default MainSection;
