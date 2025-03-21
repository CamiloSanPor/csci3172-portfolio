const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
const router = express.Router();

const projects = require("./projects.json");

router.get("/all-projects", (req, res) => {
	res.json(projects);
});

app.use("/.netlify/functions/api", router);

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;

router.get("/weather", async (req, res) => {
	const city = req.query.city;
	if (!city) {
		return res.status(400).json({ error: "City is required" });
	}
	try {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
		);
		const data = await response.json();
		if (data.cod !== 200) {
			return res.status(404).json({ error: "City not found" });
		}
		res.json({
			city: data.name,
			temperature: data.main.temp,
			humidity: data.main.humidity
		});
	} catch (error) {
		res.status(500).json({ error: "Server error" });
	}
});

module.exports = {
	handler: serverless(app)
};
