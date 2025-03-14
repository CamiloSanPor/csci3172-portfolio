import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./pages/home/App";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import NotFound from "./pages/not-found/NotFound";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
