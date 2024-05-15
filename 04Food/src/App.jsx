import { useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Dish from "./components/Dish";
import { foodData } from "./food";

const BASE_URL = "http://localhost:4000";

function App() {
  const [food, setFood] = useState([]);
  const [filteredFood, setFilteredFood] = useState([]);
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadFood();
  }, []);

  useEffect(() => {
    onSearchTextChanged();
  }, [search]);

  useEffect(() => {
    onCategoryChanged();
  }, [activeType, food]);

  const loadFood = async () => {
    try {
      const res = await fetch(BASE_URL + "/food");
      const response = await res.json();
      setFood(response?.length ? response : foodData);
    } catch (err) {
      setFood(foodData);
      console.log(err);
    }
  };

  const onSearchTextChanged = () => {
    if (activeType != "all") setActiveType("all");

    if (search == "") {
      setFilteredFood(food);
      return;
    }

    const temp = food.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFood(temp);
  };

  const onCategoryChanged = () => {
    if (activeType == "all") {
      setFilteredFood(food);
      return;
    }

    const temp = food.filter((food) => food.type.includes(activeType));
    setFilteredFood(temp);
  };

  return (
    <MainContainer>
      <Header
        activeType={activeType}
        setActiveType={setActiveType}
        search={search}
        setSearch={setSearch}
      />
      <Dish food={filteredFood} />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.div``;
