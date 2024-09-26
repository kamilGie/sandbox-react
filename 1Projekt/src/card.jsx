import PropTypes from "prop-types"
import UnkownChempPhoto from "./assets/none.jpg"


function Card(props) {
	return (
		<div className="card">
			<img className="img" src={props.img} />
			<h2 className="name">{props.name}</h2>
			<p className="desc">{props.desc}</p>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	desc: PropTypes.string,
	img: PropTypes.any
}

Card.defaultProps = {
	name: "unknow",
	desc: "jakis mistyzcny nwm kto",
	img: UnkownChempPhoto
}

export default Card
