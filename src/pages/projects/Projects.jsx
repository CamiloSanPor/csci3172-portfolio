import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Project from "../../components/project/Project";
import "./Projects.css";

function Projects() {
	const projects = [
		{
			image: "assets/projects/bubble_biologist.png",
			styles: "shade-secondary round-corners grid-element",
			url: "https://globalgamejam.org/games/2025/bubble-biologist-4",
			name: "Bubble Biologist",
			role: "Game Design, Programming",
			description:
				"Join Dr. Penelope Hog (PhD Marine Biology from Dalhousie University) as she takes on a special mission in the Atlantic Ocean! Tasked with searching for the threatened blobfish, you'll help her explore, study local marine life, and find as many fish as possible in this classic platformer.",
			tech: "Unity, C#"
		},
		{
			image: "assets/projects/Scaly-Scaling.png",
			styles: "shade-primary round-corners grid-element",
			url: "https://ploopjuice.itch.io/scalyscaling",
			name: "Scaly Scaling",
			role: "Game/Level Design, Programming",
			description:
				"Chameleon Chaos! Help Carey Casey the Chameleon obtain delicious golden beetles in this weird puzzle/platformer hybrid.",
			tech: "Godot, GDScript"
		},
		{
			image: "assets/projects/Squeaker.png",
			styles: "shade-secondary round-corners grid-element",
			url: "https://lydiav2001.github.io/GlobalGameJam2024/",
			name: "Squeaker",
			role: "Game Design, Programming, Frontend Development",
			description:
				'Take the mouse to justice! Discover evidence by scrolling though "Squeaker" and looking for suspicious activity.',
			tech: "HTML, CSS, JavaScript"
		},
		{
			image: "assets/projects/Weometry-Gars.png",
			styles: "shade-secondary round-corners grid-element",
			url: "https://ploopjuice.itch.io/weometry-gars",
			name: "Weometry Gars",
			role: "Game design, Artwork, Programming",
			description:
				"Weometry Gars is a top down shooter where you, the player, take turns with the enemies firing and dodging shots.",
			tech: "Godot, GDScript"
		},
		{
			image: "assets/projects/Carruto.png",
			styles: "shade-primary round-corners grid-element",
			url: "https://v3.globalgamejam.org/2023/games/carruto-0",
			name: "Carruto",
			role: "Game design, Artwork, Programming",
			description:
				"Grow your own clones to solve 1 of 4 unique puzzles. But be careful, for your clones follow your every move... in reverse!",
			tech: "Unity, C#"
		}
	];

	return (
		<>
			<Header className="shade-primary" />
			<main className="projects">
				<h1 className="underline">Projects</h1>

				<div className="grid">
					{projects.map((project) => {
						return (
							<Project
								styles={project.styles}
								image={project.image}
								url={project.url}
								name={project.name}
								role={project.role}
								description={project.description}
								tech={project.tech}
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
