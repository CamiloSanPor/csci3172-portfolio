import React, { useEffect } from "react";
import "./App.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function App() {
	// Fetch weather data when the component mounts
	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(
					"/.netlify/functions/api/weather"
				);
				const data = await response.json();
				if (data.cod === 200) {
					console.log(`City: ${data.name}`);
					console.log(`Temperature: ${data.main.temp}°C`);
					console.log(`Humidity: ${data.main.humidity}%`);
					console.log(`Weather: ${data.weather[0].description}`);
				} else {
					console.log("City not found");
				}
			} catch (error) {
				console.error("Error fetching weather data:", error);
			}
		};

		fetchWeather();
	}, []);

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
