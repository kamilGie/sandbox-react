import PropTypes from "prop-types"
import UnkownChempPhoto from "./assets/none.jpg"


function Card({ name = "unknow", desc = "jakis mistyzcny nwm kto", img = UnkownChempPhoto, func, id }) {
	return (
		<div value={name} className="card" onClick={() => (func(id))}>
			<img className="img" src={img} />
			<h2 className="name">{name}</h2>
			<p className="desc">{desc}</p>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	desc: PropTypes.string,
	img: PropTypes.any,
	func: PropTypes.func,
	key: PropTypes.number
}

export default Card
