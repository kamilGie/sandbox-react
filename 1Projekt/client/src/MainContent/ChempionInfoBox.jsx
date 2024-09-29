import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function ChempionInfoBox(props) {
	const [InfoBoxText, setInfoBoxText] = useState("click the chempion to get time since last play");

	useEffect(() => {
		const calculateTimeDifference = () => {
			if (props.selectedChempion !== 0) {
				const lastPlayDate = new Date(props.selectedChempion);
				const currentDate = new Date();
				const timeDifference = currentDate - lastPlayDate;

				const daysPast = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
				const hoursPast = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
				const minutesPast = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
				const secondsPast = Math.floor((timeDifference % (1000 * 60)) / 1000);

				setInfoBoxText(`${daysPast} days \n ${hoursPast}h ${minutesPast}m ${secondsPast}s`);
			}
			else {
				setInfoBoxText("click the chempion to get time since last play");
			}
		};
		calculateTimeDifference();

		var interval = setInterval(calculateTimeDifference, 1000);

		return () => clearInterval(interval);
	}, [props.selectedChempion]);


	return (
		<div className="ChempionInfoBox">
			<div className="ChempionInfoNote"> <p className="nick">{props.userNick}</p> {InfoBoxText}</div>
		</div>
	);
}

ChempionInfoBox.propTypes = {
	selectedChempion: PropTypes.number.isRequired,
	userNick: PropTypes.string
};

export default ChempionInfoBox;
