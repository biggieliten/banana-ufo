import "./Input.css"

const InputComponent = ({style, placeholder, onChange}) => {

	const handleChange = (event) => {
		onChange(event.target.value)
	}

	return <><input className={style} type="text/string" placeholder= {placeholder} onChange={handleChange} />
	</>

}

export default InputComponent;