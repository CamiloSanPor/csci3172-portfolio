import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { FaNairaSign } from "react-icons/fa6";

function App() {
	const [weather, setWeather] = useState({
		city: "",
		temperature: "",
		humidity: ""
	});
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, []);

	return (
		<>
			<Header />
			<main className="splash-screen shade-secondary round-corners">
				<h1 className="underline">Camilo Sanchez Porras</h1>
				{loading && (
					<div id="loading" className="message">
						<p>Loading...</p>
					</div>
				)}

				{error && (
					<div id="error" className="message">
						<p>{error}</p>
					</div>
				)}

				{!loading && !error && (
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
