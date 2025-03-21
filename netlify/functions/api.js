const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const router = express.Router();

const projects = require("./projects.json");

router.get("/all-projects", (req, res) => {
	console.log(JSON.stringify(projects));
	res.json(projects);
});

app.use("/.netlify/functions/api", router);

module.exports = {
	handler: serverless(app)
};
