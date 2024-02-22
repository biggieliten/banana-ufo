


const Food = ({name, type, ingredients}) => { 



	return(

		<>
		<h2>{name}</h2>
		<li>
			<ul>
			Dish: {name}, Type of dish: {type}, Ingredients: {ingredients}
			</ul>
			</li>
		</>

	)
	
}

export default Food;