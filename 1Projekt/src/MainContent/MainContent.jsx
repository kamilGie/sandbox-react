import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"
import { useState } from "react"
import "./MainContent.css"
import axios from "axios"

function MainContent() {
	const [SelectedChempion, SetSelectedChampion] = useState(0)

	const GetChempionLevel = async (e) => {
		try {
			const response = await axios.get(`https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/di7R895EQ6bIYsy4hvDhx0bExYVFdo9PUrKYKnLbdh6-KOdqkRNouqz-SOdik72hzRUp6qwrmEoFeA/by-champion/${e}?api_key=RGAPI-f77653f9-a217-42ce-adf1-f88eb9f45df2`);
			const lastPlayTime = response.data.lastPlayTime; // Oczekiwany format: 'YYYY-MM-DDTHH:mm:ss.sssZ'
			const lastPlayDate = new Date(lastPlayTime); // Tworzenie obiektu Date z lastPlayTime
			const currentDate = new Date();
			const timeDifference = currentDate - lastPlayDate;
			const daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
			const hoursPast = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			const minutesPast = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
			const secondsPast = Math.floor((timeDifference % (1000 * 60)) / 1000);

			// Formatowanie wyniku jako "dni:godziny:minuty:sekundy"
			const timeString = `${daysPast}:${hoursPast}:${minutesPast}:${secondsPast}`;

			// Ustawienie wybranego czempiona
			SetSelectedChampion(timeString); // Upewnij się, że nazwa funkcji jest poprawna
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
