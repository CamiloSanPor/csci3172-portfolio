import React from "react";
import { NavLink } from "react-router";
import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<h2 className="underline">Contact Me</h2>
			<div className="contacts">
				<div className="contact">
					<img src="assets/footer/github-mark-white.png" alt="Github icon" />
					<a href="https://github.com/CamiloSanPor">Github</a>
				</div>

				<div className="contact">
					<img src="assets/footer/InBug-White.png" alt="LinkedIn icon" />
					<a href="https://www.linkedin.com/in/camilo-sanchez-porras">
						LinkedIn
					</a>
				</div>

				<div className="contact">
					<img src="assets/footer/gmail-logo.png" alt="Gmail icon" />
					<a href="mailto:camilosanpor@gmail.com">Gmail</a>
				</div>
			</div>
			<div className="attributions">
				<a href="https://github.com/logos" title="github icons">
					GitHub icon created by GitHub - GitHub
				</a>
				<a href="https://brand.linkedin.com/downloads" title="linkedin icons">
					LinkedIn icon created by LinkedIn - LinkedIn
				</a>
				<a href="https://www.flaticon.com/free-icons/gmail" title="gmail icons">
					Gmail icon created by Google - Flaticon
				</a>
				<a href="https://www.flaticon.com/free-icons/sun" title="sun icons">
					Sun icons created by Good Ware - Flaticon
				</a>
				<a href="https://www.flaticon.com/free-icons/moon" title="moon icons">
					Moon icons created by Good Ware - Flaticon
				</a>
			</div>
		</footer>
	);
};

export default Footer;
