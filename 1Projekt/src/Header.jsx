function Header() {
	const HeaderStyle = {
		backgroundColor: '#596e79',
		height: '100px',
		width: "100%",
		boxSizing: "border-box;",
		margin: "0",
		display: "flex",
		alignItems: "center",

	};
	const LogoStyle = {
		color: "white",
		margin: "0",
		fontFamily: "Arial",
		marginLeft: "20px"
	}
	return (
		<div style={HeaderStyle}>
			<h1 style={LogoStyle}>LOL STATS</h1>

		</div>
	);
}

export default Header
