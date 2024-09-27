function ChempionInfoBox() {
	const BoxStyle = {
		backgroundColor: "#f0eed3",
		height: "95%",
		width: "95%",
		borderRadius: "10%",
	}
	const BoxCenter = {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "100%",          // Kontener zajmuje 100% wysokości okna przeglądarki
		width: "100%"
	}
	return (<div style={BoxCenter}><div style={BoxStyle}></div> </div>)
}

export default ChempionInfoBox
