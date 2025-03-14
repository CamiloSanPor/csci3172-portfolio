import React from "react";

const Project = ({ styles, image, url, name, role, description, tech }) => {
	return (
		<article className={styles}>
			<img src={image} alt={`Screenshot of ${name}`} />
			<a href={url}>
				<h2 className="underline">{name}</h2>
			</a>
			<h3>{role}</h3>
			<p>{description}</p>
			<h3>{tech}</h3>
		</article>
	);
};

export default Project;
