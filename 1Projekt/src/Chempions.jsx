import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"

function Chempions() {
	const chempionsStyle = {
		display: "grid",
		width: "100vw",
		gridTemplateColumns: "1fr 1fr", // Dwie kolumny o równej szerokości
		gap: "10px",
		padding: "10px"
	}

	return (<div style={chempionsStyle}>
		<ChempionsGrid />
		<ChempionInfoBox />
	</div>)

}

export default Chempions
