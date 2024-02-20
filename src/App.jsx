import HeaderComponent from "./components/Header/Header.jsx";
import UfoList from "./components/UfoList/UfoList.jsx";
import  InputComponent  from "./components/Input/Input.jsx";
import "../src/root.css"
import "./styles/app.css";

const App = () => {
	return (
		<>
		<HeaderComponent />
		<InputComponent />
		<UfoList />
		</>
	)
	
}

export default App;