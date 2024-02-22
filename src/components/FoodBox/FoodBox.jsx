import Food from "../Food/Food";
import food from "./food.json";
// import images from "./images"
import "./FoodBox.css";

const FoodBox = () => {
  const data = food.data;
  return (
    <>
      {data.map((dish) => {
        return (
          <Food
            name={dish.name}
            type={dish.type}
            ingredients={dish.Ingredients}
            image={dish.image}
          />
        );
      })}
    </>
  );
};

export default FoodBox;
