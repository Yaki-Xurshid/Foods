import React from "react";
import Cards from "../../Components/Card";
import MenyuWrapper from "./MenyuWrapper";

const Menyu = () => {
  return (
    <MenyuWrapper>
      <div className="row  sectionabout">
        <p className="text3">Menu</p>
        <p className="text4">Food Full of treaty Love</p>

        <p className="text6  text9">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,
        </p>
        <Cards />
      </div>
    </MenyuWrapper>
  );
};

export default Menyu;
