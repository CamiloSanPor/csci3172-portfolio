import React from "react";

const Project = ({
	styles,
	image,
	url,
	name,
	description,
	authors,
	languages
}) => {
	return (
		<article className={styles}>
			<img src={image} alt={`Screenshot of ${name}`} />
			<a href={url}>
				<h2 className="underline">{name}</h2>
			</a>
			{authors && authors.length > 0 && (
				<div className="authors">
					<h3>Authors:</h3>
					<ul>
						{authors.map((author, index) => (
							<li key={index}>{author}</li>
						))}
					</ul>
				</div>
			)}
			{languages && languages.length > 0 && (
				<div className="languages">
					<h3>Languages:</h3>
					<ul>
						{languages.map((language, index) => (
							<li key={index}>{language}</li>
						))}
					</ul>
				</div>
			)}
			<p>{description}</p>
		</article>
	);
};

export default Project;
