import Card from "./card"
import DariusPhoto from "./assets/Darius.webp"
import TeemoPhoto from "./assets/teemo.avif"
import YasuoPhoto from "./assets/yasuo.webp"


function ChempionGrid() {
	return (
		<div className="ChampContainer">
			<Card name="Darius" desc="jest totalnym koxem krol noxusu" img={DariusPhoto} />
			<Card name="Teemo" desc="jest malym chomikiem smiesznym xd" img={TeemoPhoto} />
			<Card name="Yasuo" desc="jest postiacia dla simg totalnych i dla koxow " img={YasuoPhoto} />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
}


export default ChempionGrid
