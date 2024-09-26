import Card from "./card"
import { ChempionList } from "./ChempionsData"

function ChempionsGrid() {
	return (
		<div className="ChampContainer">
			{ChempionList.map(chemp => (
				<Card key={chemp.name} name={chemp.name} desc={chemp.desc} img={chemp.img} />
			))}
		</div>
	);
}

export default ChempionsGrid
