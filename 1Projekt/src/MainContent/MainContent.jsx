import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"
import { useEffect, useState } from "react"
import "./MainContent.css"
import axios from "axios"

function MainContent() {
	const [selectedChampionID, SetSelectedChampionID] = useState(0)
	const [TimePast, setTimePast] = useState(0);
	const riotID = "RGAPI-f77653f9-a217-42ce-adf1-f88eb9f45df2";
	const puuid = "di7R895EQ6bIYsy4hvDhx0bExYVFdo9PUrKYKnLbdh6-KOdqkRNouqz-SOdik72hzRUp6qwrmEoFeA";


	useEffect(() => {
		const fetchChampionData = async () => {
			try {
				const response = await axios.get(`https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${selectedChampionID}?api_key=${riotID}`);
				setTimePast(response.data.lastPlayTime);
			} catch (error) {
				console.error('Błąd podczas pobierania danych API:', error);
			}
		};

		if (selectedChampionID !== 0) {
			fetchChampionData();
		}
	}, [selectedChampionID]);

	function ChempionClick(e) {
		SetSelectedChampionID(e)
	}

	return (<div className="MainContainer" >
		<ChempionsGrid func={ChempionClick} />
		<ChempionInfoBox selectedChempion={TimePast} />
	</div>)
}

export default MainContent
