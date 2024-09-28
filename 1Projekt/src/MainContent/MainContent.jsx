import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"
import { useState } from "react"
import "./MainContent.css"

function MainContent() {
	const [SelectedChempion, SetSelectedChempion] = useState(0)

	function HandleClickedChempion(id) {
		SetSelectedChempion(id)
	}

	return (<div className="MainContainer" >
		<ChempionsGrid func={HandleClickedChempion} />
		<ChempionInfoBox selectedChempion={SelectedChempion} />
	</div>)
}

export default MainContent
