import React from "react";
import styled from "styled-components";

export default function Dish({ food }) {
  return (
    <DishCtr>
      {food.map((food, i) => (
        <FoodCard key={food.name}>
          <img
            src={"http://localhost:4000" + food.image}
            onError={(event) => {
              event.target.src = "/burger.png";
              event.onerror = null;
            }}
          />
          <FoodDetails>
            <div>
              <p className="title">{food.name}</p>
              <p className="details">{food.text}</p>
            </div>
            <Button>{"$ " + food.price.toFixed(2)}</Button>
          </FoodDetails>
        </FoodCard>
      ))}
    </DishCtr>
  );
}

const DishCtr = styled.div`
  background: url("/bg.png");
  display: flex;
  min-height: calc(100vh - 240px);
  background-size: cover;
  justify-content: center;
  padding: 100px 0px;
  row-gap: 32px;
  column-gap: 20px;
  flex-wrap: wrap;
`;

const FoodCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 340px;
  height: 167px;
  border: 0.66px solid;
  padding: 8px;
  border-radius: 20px;
  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  .title {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 5px;
  }
  .details {
    font-size: 12px;
  }
`;

const Button = styled.div`
  background-color: #ff4343;
  align-self: flex-end;
  border-radius: 5px;
  padding: 4px 8px;
  margin: 5px;
  cursor: pointer;
  &:hover {
    background-color: #d52323;
  }
`;

const FoodDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FOOD = [
  {
    name: "Boiled Egg",
    price: 10,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/egg.png",
    type: "breakfast",
  },
  {
    name: "RAMEN",
    price: 25,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/ramen.png",
    type: "lunch",
  },
  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    image: "/images/chicken.png",
    type: "dinner",
  },
];
