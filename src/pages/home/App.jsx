import React from "react";
import "./App.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function App() {
	return (
		<>
			<Header />
			<main className="splash-screen shade-secondary round-corners">
				<h1 className="underline">Camilo Sanchez Porras</h1>
			</main>
			<Footer />
		</>
	);
}

export default App;
