import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function App() {
	const [weather, setWeather] = useState();

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(
					`/.netlify/functions/api/weather?city=${encodeURIComponent(
						"Cali Colombia"
					)}`
				);
				const data = await response.json();
				if (data != null) {
					console.log(`City: ${data.city}`);
					console.log(`Temperature: ${data.temperature}°C`);
					console.log(`Humidity: ${data.humidity}%`);
					setWeather(data);
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
				<p>{weather.city} {weather.temperature}°C {weather.humidity}%</p>
			</main>
			<Footer />
		</>
	);
}

export default App;
