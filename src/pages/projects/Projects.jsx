import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Project from "../../components/project/Project";
import Hamburger from "../../components/hamburger/Hamburger"
import "./Projects.css";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get(
					"/.netlify/functions/api/all-projects"
				);
				setProjects(response.data);
			} catch (error) {
				setError(error);
				console.error("Error fetching projects:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	return (
		<>
			<Header className="shade-primary" />
			<main className="projects">
				<h1 className="underline">Projects</h1>

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

				<div className="grid">
					{projects.map((project) => {
						return (
							<Project
								styles={project.styles}
								image={project.image}
								url={project.url}
								name={project.name}
								description={project.description}
								authors={project.authors}
								languages={project.languages}
							/>
						);
					})}
				</div>
			</main>
			<Hamburger />
			<Footer />
		</>
	);
}

export default Projects;
