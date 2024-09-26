import PropTypes from "prop-types"
import UnkownChempPhoto from "./assets/none.jpg"


function Card({ name = "unknow", desc = "jakis mistyzcny nwm kto", img = UnkownChempPhoto }) {
	const wyswietlInfo = (e) => (e.currentTarget.style.display = "none");

	return (
		<div className="card" onClick={wyswietlInfo}>
			<img className="img" src={img} />
			<h2 className="name">{name}</h2>
			<p className="desc">{desc}</p>
		</div>
	);
}

Card.propTypes = {
	name: PropTypes.string,
	desc: PropTypes.string,
	img: PropTypes.any
}

export default Card
