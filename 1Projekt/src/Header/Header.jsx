import styles from "./Header.module.css"

function Header() {
	return (
		<div className={styles.Header}>
			<h1 className={styles.Logo}>LOL STATS</h1>
		</div>
	);
}

export default Header
