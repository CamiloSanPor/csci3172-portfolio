const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const axios = require("axios");
const fetch = require("node-fetch");

dotenv.config();
const app = express();
const router = express.Router();

const projects = require("./projects.json");

router.get("/projects", (req, res) => {
	console.log(JSON.stringify(projects));
	res.json(projects);
});

app.use("/.netlify/functions/api", router);

module.exports = {
	handler: serverless(app)
};
