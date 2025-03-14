import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function About() {
	return (
		<>
			<Header />
			<main className="about">
				<h1 className="underline">About Me</h1>

				<div className="grid">
					<article className="shade-primary round-corners grid-element">
						<h2>Education</h2>
						<p>
							I'm pursuing a Bachelor of Applied Computer Science at Dalhousie
							University. Courses such as Web-Centric Computing, Server-Side
							Scripting, Database Systems and Software Engineering has help me
							build a strong foundation in both theoretical concepts and
							practical applications.
						</p>
					</article>

					<article className="shade-secondary round-corners grid-element">
						<h2>Experience</h2>
						<p>
							My experience spans full stack development, mobile app creation,
							and game design. I've contributed to projects like “What's
							Happening,” a dynamic PHP/MySQL web application, and “Online
							Barter Trader,” an Android app with advanced features. In
							addition, I serve as Head Teaching Assistant for Database Systems
							at Dalhousie University and have instructed young learners in
							computer science, further honing my ability to communicate complex
							technical concepts.
						</p>
					</article>

					<article className="shade-secondary round-corners grid-element">
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

					<article className="shade-primary round-corners grid-element">
						<h2>Technical Skills</h2>
						<p>
							My technical toolkit includes proficiency in programming languages
							such as Java, C, C++, C#, Python, SQL, and GDScript. I'm
							experienced in front-end and back-end web development using HTML,
							CSS, JavaScript, React, Angular, Node.js, and PHP, as well as
							industry-standard tools like Git, Jira, Agile/Scrum methodologies,
							Android Studio, Firebase, DevOps, and CI/CD pipelines.
						</p>
					</article>
				</div>
			</main>
			<Footer />
		</>
	);
}

export default About;
