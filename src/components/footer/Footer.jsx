import React from "react";
import "./Footer.css";
import GitHubBlack from "../../assets/footer/github-mark-black.png";
import GitHubWhite from "../../assets/footer/github-mark-white.png";
import LinkedInBlack from "../../assets/footer/InBug-Black.png";
import LinkedInWhite from "../../assets/footer/InBug-White.png";
import GmailBlack from "../../assets/footer/gmail-logo-black.png";
import GmailWhite from "../../assets/footer/gmail-logo-white.png";
import { useTheme } from "../../context/ThemeProvider";
import { LIGHT_THEME } from "../../constants/constants";
import ContactForm from "../contact_form/ContactForm";

const Footer = () => {
	const { theme } = useTheme();

	const gitHubIcon = () => {
		if (theme === LIGHT_THEME) {
			return GitHubBlack;
		}
		return GitHubWhite;
	};

	const linkedInIcon = () => {
		if (theme === LIGHT_THEME) {
			return LinkedInBlack;
		}
		return LinkedInWhite;
	};

	const gmailIcon = () => {
		if (theme === LIGHT_THEME) {
			return GmailBlack;
		}
		return GmailWhite;
	};

	return (
		<footer>
			<h2 className="underline">Contact Me</h2>
			<div className="contacts">
				<div className="contact">
					<img src={gitHubIcon()} alt="Github icon" />
					<a href="https://github.com/CamiloSanPor">Github</a>
				</div>

				<div className="contact">
					<img src={linkedInIcon()} alt="LinkedIn icon" />
					<a href="https://www.linkedin.com/in/camilo-sanchez-porras">
						LinkedIn
					</a>
				</div>

				<div className="contact">
					<img src={gmailIcon()} alt="Gmail icon" />
					<a href="mailto:camilosanpor@gmail.com">Gmail</a>
				</div>
			</div>

			<ContactForm />

			<div className="attributions">
				<h3>Attributions</h3>
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
