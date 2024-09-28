import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"
import { useState } from "react"
import "./MainContent.css"
import axios from "axios"

function MainContent() {
	const [SelectedChempion, SetSelectedChempion] = useState(0)

	const GetChempionLevel = async (e) => {
		try {
			const response = await axios.get(`https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/di7R895EQ6bIYsy4hvDhx0bExYVFdo9PUrKYKnLbdh6-KOdqkRNouqz-SOdik72hzRUp6qwrmEoFeA/by-champion/${e}?api_key=RGAPI-f77653f9-a217-42ce-adf1-f88eb9f45df2`);
			console.log(response);
			SetSelectedChempion(response.data.championPoints);
		} catch (error) {
			console.error('Błąd podczas pobierania klucza API:', error);
		}
	};

	return (<div className="MainContainer" >
		<ChempionsGrid func={GetChempionLevel} />
		<ChempionInfoBox selectedChempion={SelectedChempion} />
	</div>)
}

export default MainContent
