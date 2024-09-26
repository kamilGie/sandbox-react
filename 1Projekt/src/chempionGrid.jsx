import Card from "./card"
import DariusPhoto from "./assets/Darius.webp"
import TeemoPhoto from "./assets/teemo.avif"
import YasuoPhoto from "./assets/yasuo.webp"


class Chempion {
	constructor(name, desc, img) {
		this.name = name;
		this.desc = desc;
		this.img = img;
	}
}

function ChempionGrid() {
	const ChempionList = [
		new Chempion("Darius", "jest totalnym koxem i wgl", DariusPhoto),
		new Chempion("teemo", "jest juz takim chomikem slodkim", TeemoPhoto),
		new Chempion("yasuo", "jest takim mistrzem spinjutsu", YasuoPhoto),
	]

	const ChempionListMap = ChempionList.map(chemp => (
		<Card
			key={chemp.name}
			name={chemp.name} desc={chemp.desc} img={chemp.img}
		/>
	));


	return (
		<div className="ChampContainer">
			{ChempionListMap}
		</div>
	);
}


export default ChempionGrid
