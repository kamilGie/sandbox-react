import { useState } from "react";
import Footer from "./Footer/ Footer.jsx";
import Header from "./Header/Header.jsx"
import MainContent from "./MainContent/MainContent.jsx";

function App() {
	const [nickAndTag, SetNickAndTag] = useState({ nick: "", tag: "eune" })
	return (
		<>
			<Header user={SetNickAndTag} />
			<MainContent user={nickAndTag} />
			<Footer />
		</>
	);
}

export default App
