const Food = ({ name, type, ingredients, image }) => {
  return (
    <>
      <div className={"card"}>
        <h2>{name}</h2>
        <img className="dishImage" src={image} alt="" />
        <ul className={name}>
          <li>Type of dish: {type}</li>
          <li>Ingredients: {ingredients}</li>
        </ul>
      </div>
    </>
  );
};

export default Food;
