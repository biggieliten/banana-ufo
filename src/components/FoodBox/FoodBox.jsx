import Food from  "../Food/Food";
import food from"./food.json";

const FoodBox = () => {

	const data = food.data
	return (

		
		<>
	
		{data.map((dish) =>{
			return <Food name={dish.name} type={dish.type} ingredients={dish.Ingredients} />
		})}
	
	</>
	
	
	)
	
	
}

export default FoodBox;