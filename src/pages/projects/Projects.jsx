import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Project from "../../components/project/Project";
import "./Projects.css";

function Projects() {
	const [projects, setProjects] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchProjects = async () => {
			try {
				const response = await axios.get("/.netlify/functions/api/all-projects");
				console.log(response.data);
				setProjects(response.data);
			} catch (err) {
				setError("Failed to fetch projects");
			} finally {
				setLoading(false);
			}
		};

		fetchProjects();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<>
			<Header className="shade-primary" />
			<main className="projects">
				<h1 className="underline">Projects</h1>

				<div className="grid-2-columns">
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
			<Footer />
		</>
	);
}

export default Projects;
