import Card from "./card"
import propTypes from "prop-types"
import { ChempionList } from "./ChempionsData"

function ChempionsGrid(props) {
	return (
		<div className="ChampContainer">
			{ChempionList.map(chemp => (
				<Card key={chemp.id} name={chemp.name} desc={chemp.desc} img={chemp.img} func={props.func} id={chemp.id} />
			))}
		</div>
	);
}

ChempionsGrid.propTypes = {
	func: propTypes.func,
}

export default ChempionsGrid
