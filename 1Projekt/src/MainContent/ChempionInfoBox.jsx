import propTypes from "prop-types"
function ChempionInfoBox(props) {
	const BoxStyle = {
	}
	return (
		<div className="ChempionInfoBox">
			<div className="ChempionInfoNote" style={BoxStyle}>{props.selectedChempion}</div>
		</div>)
}

ChempionInfoBox.propTypes = {
	selectedChempion: propTypes.number,
}


export default ChempionInfoBox
