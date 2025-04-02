import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";
import "./About.css";
import { useState } from "react";
import {
	FaReact,
	FaJava,
	FaPython,
	FaHtml5,
	FaCss3Alt,
	FaNodeJs,
	FaGit,
	FaPhp,
	FaJira,
	FaAngular,
	FaPlus,
	FaHashtag,
	FaBrain,
	FaLightbulb,
	FaHandPaper,
	FaCode,
	FaUserTie,
	FaSyncAlt
} from "react-icons/fa";
import { SiGodotengine, SiJavascript } from "react-icons/si";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";

function About() {
	const skills = [
		{ name: "Java", icon: <FaJava /> },
		{ name: "C", icon: <TbCircleLetterCFilled /> },
		{ name: "C++", icon: <FaPlus /> },
		{ name: "C#", icon: <FaHashtag /> },
		{ name: "Python", icon: <FaPython /> },
		{ name: "MySQL", icon: <GrMysql /> },
		{ name: "GDScript", icon: <SiGodotengine /> },
		{ name: "HTML", icon: <FaHtml5 /> },
		{ name: "CSS", icon: <FaCss3Alt /> },
		{ name: "JavaScript", icon: <SiJavascript /> },
		{ name: "React", icon: <FaReact /> },
		{ name: "Angular", icon: <FaAngular /> },
		{ name: "Node.js", icon: <FaNodeJs /> },
		{ name: "PHP", icon: <FaPhp /> },
		{ name: "Git", icon: <FaGit /> },
		{ name: "Jira", icon: <FaJira /> },
		{ name: "Communication", icon: <IoIosPeople /> },
		{ name: "Problem-Solving", icon: <FaCode /> },
		{ name: "Teamwork", icon: <IoIosPeople /> },
		{ name: "Leadership", icon: <FaUserTie /> },
		{ name: "Adaptability", icon: <FaSyncAlt /> },
		{ name: "Critical Thinking", icon: <FaBrain /> },
		{ name: "Creativity", icon: <FaLightbulb /> },
		{ name: "Conflict Resolution", icon: <FaHandPaper /> }
	];

	const [query, setQuery] = useState("");

	const filteredSkills = skills.filter((skill) =>
		skill.name.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<>
			<Header />
			<main className="about">
				<h1 className="underline">About Me</h1>

				<div className="flex-grid">
					<article className="shade-secondary round-corners flex-element">
						<h2>Education</h2>
						<p>
							<strong>Bachelor of Applied Computer Science</strong>
						</p>
						<p>Dalhousie University 2022 - 2026</p>
						<p>
							<strong>Noteworthy Courses</strong>
						</p>
						<p>Web-Centric Computing</p>
						<p>Server-Side Scripting</p>
						<p>Web Design & Development</p>
						<p>Database Systems</p>
					</article>

					<article className="shade-primary round-corners flex-element">
						<h2>Goals</h2>
						<p>
							My goal is to continue developing my skills and open my own game
							development studio. I want to work with a team of talented,
							passionate people to create games that challenge, inspire, and
							leave a lasting impact. To me, games are one of the most beautiful
							forms of art, and I am committed to dedicating my life to this
							craft.
						</p>
					</article>

					<article className="shade-secondary round-corners flex-element">
						<h2>Experience</h2>
						<p>
							<strong>Database Systems Teaching Assistant</strong>
						</p>
						<p>Dalhousie University</p>
						<p>
							<strong>Computer Science Instructor</strong>
						</p>
						<p>SuperNOVA at Dalhousie University</p>
						<p>
							<strong>Guest Services Representative</strong>
						</p>
						<p>Casino Nova Scotia</p>
					</article>
				</div>
				<section className="round-corners skills">
					<h2 className="underline">Skills</h2>

					<input
						type="text"
						placeholder="Search skills..."
						value={query}
						onChange={(event) => setQuery(event.target.value)}
						name="search"
						id="search"
						className="search round-corners"
					/>

					<div className="skill-cards">
						{filteredSkills.map((skill, index) => (
							<div key={index} className="card">
								<div className="icon">{skill.icon}</div>
								<p>{skill.name}</p>
							</div>
						))}
					</div>
				</section>
			</main>
			<Hamburger />
			<Footer />
		</>
	);
}

export default About;
