import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Hamburger from "../../components/hamburger/Hamburger";

function NotFound() {
	return (
		<>
			<Header />
			<main className="splash-screen shade-secondary round-corners">
				<h1 className="underline">
					Oops! The page you're looking for doesn't exist.
				</h1>
			</main>
			<Hamburger />
			<Footer />
		</>
	);
}

export default NotFound;
