import React from "react";
import CardWrapper from "./CardWrapper";
const data = [
  {
    image: "cardfoto.png",
    title: "Vegie Muffen",
    subtitle:
      "There are many things are needed to start the Fast Food Business.",
    prices: 16,
    rating: 4,
  },
  {
    image: "cardfoto2.png",
    title: "Salads",
    subtitle:
      "There are many things are needed to start the Fast Food Business.",
    prices: 12,
    rating: 5,
  },
  {
    image: "cardfoto3.png",
    title: "Burger",
    subtitle:
      "There are many things are needed to start the Fast Food Business.",
    prices: 10,
    rating: 3,
  },
  {
    image: "cardfoto4.png",
    title: "Delmonico Steak dish",
    subtitle:
      "There are many things are needed to start the Fast Food Business.",
    prices: 14,
    rating: 2,
  },
  {
    image: "cardfoto5.png",
    title: "Egg Masala",
    subtitle:
      "There are many things are needed to start the Fast Food Business.",
    prices: 9,
    rating: 4,
  },
  {
    image: "cardfoto6.png",
    title: "Peach Melba dish",
    subtitle:
      "There are many things are needed to start the Fast Food Business.",
    prices: 15,
    rating: 3,
  },
];

const Cards = () => {
  return (
    <CardWrapper>
      <div className="row g-5">
        {data.map((v, i) => (
          <div className="col-sm-4" key={i}>
            <div className="card">
              <img src={v.image} alt="CardPhoto" className="img" />
              <div className="m-4">
                <div className="d-flex justify-content-between title">
                  <h1>{v.title}</h1>
                  <span>{v.prices}$</span>
                </div>
                <p>{v.subtitle}</p>
                <div className="d-flex justify-content-between">
                  <button>+</button>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
};

export default Cards;
