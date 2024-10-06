import ChempionInfoBox from "./ChempionInfoBox";
import ChempionsGrid from "./ChempionsGrid";
import { useEffect, useState } from "react";
import "./MainContent.css";
import axios from "axios";
import PropTypes from "prop-types";

function MainContent(props) {
  const [selectedChampionID, SetSelectedChampionID] = useState(0);
  const [TimePast, setTimePast] = useState(0);
  const riotID = "RGAPI-3ae215a5-0bc9-4a68-8962-7d4dbb1c2999";
  const [puuid, setpuuid] = useState(
    "di7R895EQ6bIYsy4hvDhx0bExYVFdo9PUrKYKnLbdh6-KOdqkRNouqz-SOdik72hzRUp6qwrmEoFeA",
  );

  useEffect(() => {
    if (props.user.nick === "") return;
    const fetchPuuid = async () => {
      try {
        const response = await axios.get("http://localhost:3000/puuid", {
          headers: {
            nick: props.user.nick,
            tag: props.user.tag,
          },
        });
        console.log(response);
        setpuuid(response.data);
        SetSelectedChampionID(0);
      } catch (error) {
        console.error("Błąd podczas pobierania danych API:", error);
      }
    };
    fetchPuuid();
  }, [props.user]);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const url = `https://eun1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${puuid}/by-champion/${selectedChampionID}?api_key=${riotID}`;
        console.log(url);
        const response = await axios.get(url);
        setTimePast(response.data.lastPlayTime);
      } catch (error) {
        console.error("Błąd podczas pobierania danych API:", error);
      }
    };

    if (selectedChampionID !== 0) {
      fetchChampionData();
    }
  }, [selectedChampionID]);

  function ChempionClick(e) {
    SetSelectedChampionID(e);
  }

  return (
    <div className="MainContainer">
      <ChempionsGrid func={ChempionClick} />
      <ChempionInfoBox selectedChempion={TimePast} userNick={props.user.nick} />
    </div>
  );
}

MainContent.propTypes = {
  user: PropTypes.object,
};

export default MainContent;
