import Card from "./card"
import propTypes from "prop-types"
import { ChempionList } from "./ChempionsData"
import { useEffect, useState } from "react";

function ChempionsGrid(props) {
	const [FilteredChampions, setFilteredChampions] = useState([...ChempionList]);
	const [inputFilter, setInputFilter] = useState("");

	useEffect(() => {
		setFilteredChampions(ChempionList.filter(c => c.name.toLowerCase().includes(inputFilter.toLowerCase())));
	}, [inputFilter]);

	function SetFilter(e) {
		setInputFilter(e.target.value);
	}

	return (
		<div>
			<input className="SearchFilter" value={inputFilter.current} onChange={SetFilter} />
			<div className="ChampContainer">
				{FilteredChampions.map(chemp => (
					<Card key={chemp.id} name={chemp.name} desc={chemp.desc} img={chemp.img} func={props.func} id={chemp.id} />
				))}
			</div>
		</div>
	);
}

ChempionsGrid.propTypes = {
	func: propTypes.func,
}

export default ChempionsGrid
