import React, { useState } from "react";
import Individual from "./Individual";
import NameAddress from "./NameAddress";

function Form() {
  const [selectedNameAddress, setSelectedNameAddress] = useState(true);
  const [selectedIndividual, setSelectedIndividual] = useState(false);
  const nameAddressState = selectedNameAddress ? "nav-link active" : "nav-link";
  const individualState = selectedIndividual ? "nav-link active" : "nav-link";
  const handleClick = () => {
    setSelectedIndividual(!selectedIndividual);
    setSelectedNameAddress(!selectedNameAddress);
  };
  return (
    <>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className={nameAddressState}
            type="button"
            onClick={handleClick}
          >
            Name, Address Detail
          </button>
          <button
            className={individualState}
            type="button"
            onClick={handleClick}
          >
            Individual Details
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {selectedNameAddress ? <NameAddress /> : <Individual />}
      </div>
    </>
  );
}

export default Form;
