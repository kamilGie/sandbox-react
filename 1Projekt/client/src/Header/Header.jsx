import styles from "./Header.module.css"
import PropTypes from "prop-types"
import acc from "../assets/acc.svg"
import { useState } from "react";

function Header(props) {
        const [tag, setTag] = useState("eune")
        const [nick, setNick] = useState("Faker")
        function SubmitUser() {
                console.log("Submiting user")
                props.user({ nick: nick, tag: tag })
        }

        return (
                <div className={styles.Header}>
                        <h1 className={styles.Logo}>LOL STATS</h1>
                        <div className={styles.SearchBars}>
                                <input className={styles.nickBar} value={nick} onChange={(e) => { setNick(e.target.value) }} />
                                <input className={styles.tagBar} value={tag} onChange={(e) => { setTag(e.target.value) }} />
                                <button className={styles.tagBar} value={tag} onClick={SubmitUser}> subbmit</button>
                        </div>

                        <img className={styles.AccImg} width="40" height="40" src={acc}>

                        </img>
                </div>
        );
}

Header.propTypes = {
        user: PropTypes.object,
}

export default Header
