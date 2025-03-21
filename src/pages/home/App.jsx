import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function App() {
	const [weather, setWeather] = useState({
		city: "",
		temperature: "",
		humidity: ""
	});
	const [error, setError] = useState("");

	const bestCityInTheWorld = "Santiago de Cali";

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				const response = await fetch(
					`/.netlify/functions/api/weather?city=${encodeURIComponent(
						bestCityInTheWorld
					)}`
				);
				const data = await response.json();
				if (!response.ok) {
					throw new Error(data.error || "Failed to fetch weather data");
				}
				setWeather(data);
				setError("");
			} catch (error) {
				console.error("Error fetching weather data:", error);
				setError("Error fetching weather data. Please try again later.");
			}
		};

		fetchWeather();
	}, []);

	return (
		<>
			<Header />
			<main className="splash-screen shade-secondary round-corners">
				<h1 className="underline">Camilo Sanchez Porras</h1>
				{error ? (
					<p className="error-message">{error}</p>
				) : (
					<p>
						{weather.city} {weather.temperature}°C {weather.humidity}%
					</p>
				)}
			</main>
			<Footer />
		</>
	);
}

export default App;
