import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"
import { useState } from "react"

function Chempions() {
	const chempionsStyle = {
		display: "grid",
		width: "100vw",
		gridTemplateColumns: "1fr 1fr", // Dwie kolumny o równej szerokości
		gap: "10px",
	}

	const [SelectedChempion, SetSelectedChempion] = useState(0)

	function HandleClickedChempion(id) {
		SetSelectedChempion(id)
	}

	return (<div style={chempionsStyle}>
		<ChempionsGrid func={HandleClickedChempion} />
		<ChempionInfoBox selectedChempion={SelectedChempion} />
	</div>)

}

export default Chempions
