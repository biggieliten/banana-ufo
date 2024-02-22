import HeaderComponent from "./components/Header/Header.jsx";
import UfoList from "./components/UfoList/UfoList.jsx";
import InputComponent  from "./components/Input/Input.jsx";
import InfoBox from "./components/InfoBox/InfoBox.jsx";
import FoodBox from "./components/FoodBox/FoodBox.jsx";
import "./app.css";
import { useState } from "react";

const App = () => {

	const [inputValue, setInuptValue] = useState('')

	const age = 18
	const green = "green"
	const red = "red"
	
	const checkAge = () => {
		if ( inputValue.length >= 5)
			return <h2 className = "green">{green}</h2>
		else 
			return <h2 className = "red">{red}</h2>
		}





	return (


		<>
		<HeaderComponent  />
		<InputComponent  style = "inputPrimary" placeholder = {"hola amigo"} onChange = {setInuptValue} />
		<InputComponent style = "inputSecondary" placeholder= {"Type here!"}onChange={setInuptValue}/>
		<InputComponent style = "inputTetriary" placeholder = {"hola"} onChange={setInuptValue}/>
		
		<section>
		<>{checkAge(inputValue)}</>
		<InfoBox className = "InfoBox"/>
		</section>
		<UfoList />
		<FoodBox/>
		</>
	);
	
}

export default App;