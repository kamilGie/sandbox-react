import ChempionInfoBox from "./ChempionInfoBox"
import ChempionsGrid from "./ChempionsGrid"
import { useEffect, useState } from "react"
import "./MainContent.css"
import axios from "axios"
import PropTypes from "prop-types"

function MainContent(props) {
	const [selectedChampionID, SetSelectedChampionID] = useState(0)
	const [TimePast, setTimePast] = useState(0);
	const riotID = "RGAPI-821b1c03-0aa8-4b1e-95cb-22c283b49185";
	const [puuid, setpuuid] = useState("di7R895EQ6bIYsy4hvDhx0bExYVFdo9PUrKYKnLbdh6-KOdqkRNouqz-SOdik72hzRUp6qwrmEoFeA")

	useEffect(() => {
		if (props.user.nick === "") return;
		const fetchPuuid = async () => {
			try {
				const url = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${props.user.nick}/${props.user.tag}`;
				console.log(url);
				const response = await axios.get(url, { headers: { 'X-Riot-Token': riotID } });
				console.log(response);
				setpuuid(response.puuid)
			} catch (error) {
				console.error('Błąd podczas pobierania danych API:', error);
			}
		};
		fetchPuuid();
	}, [props.user])


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

MainContent.propTypes = {
	user: PropTypes.object,
}

export default MainContent
