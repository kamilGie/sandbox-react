import propTypes from "prop-types"
function ChempionInfoBox(props) {
	const BoxCenter = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",          // Kontener zajmuje 100% wysokości okna przeglądarki
		width: "100%"
	}
	const BoxStyle = {
		backgroundColor: "#c7b198",
		height: "95%",
		width: "95%",
		borderRadius: "10%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "200px",
	}
	return (
		<div style={BoxCenter}>
			<div style={BoxStyle}>{props.selectedChempion}</div>
		</div>)
}

ChempionInfoBox.propTypes = {
	selectedChempion: propTypes.number,
}


export default ChempionInfoBox
