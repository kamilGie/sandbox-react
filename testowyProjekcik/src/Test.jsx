import { useEffect, useState } from "react"
function Test() {
	const [number, setNumber] = useState(2);
	const increase = () => (setNumber(n => n + 1))
	useEffect(() => { console.log('start') },);
	let kurwa = 10;
	if (number > 10) {
		kurwa = 20;
	}
	return (<>
		<button onClick={increase}>klik</button>
		{number}
		<div></div>
		{kurwa}
	</>
	)
}


export default Test
