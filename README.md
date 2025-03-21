# Lab 7

- _Date Created_: 12 MAR 2025
- _Last Modification Date_: 20 MAR 2025
- _GitLab URL_: https://git.cs.dal.ca/porras/csci-3172/-/tree/main/labs/lab7
- _Netlify URL_: https://camilo-sanchez-porras.netlify.app/

## Authors

- Camilo Sanchez Porras(camilo.sanchez@dal.ca) - (Developer)

## Built With

- [React](https://react.dev/) - JavaScript Framework
- [React Router](https://reactrouter.com/) - Routing
- [Vite](https://vite.dev/) - Build Tool
- [Express]

## Sources Used

- Vite Docs where used to set up the project (https://vite.dev/guide/)

### main.jsx

_Lines 12 - 19_

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
</BrowserRouter>
```

The code above was created by adapting the code in [React Router](https://reactrouter.com/start/library/routing) as shown below:

```
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </BrowserRouter>
);

```

- The code in [React Router](https://reactrouter.com/start/library/routing) was implemented by using the built in BrowserRouter, Routes, and Route components to specify which url redirect to each page.
- [React Router](https://reactrouter.com/start/library/routing)'s Code was used because I had never used React Router before.
- [React Router](https://reactrouter.com/start/library/routing)'s Code was modified by adding routes that fit my project.

### index.css

_Lines 68 - 73_

```
.grid {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	margin: 1rem 0rem;
}
```

The code above was created by adapting the code in [w3schools](https://www.w3schools.com/cssref/func_repeat.php) as shown below:

```
#container {
  display: grid;
  grid-template-columns: repeat(2, 60px 1fr);
  grid-gap: 7px;
  background-color: green;
  padding: 7px;
}
```

- The code in [w3schools](https://www.w3schools.com/cssref/func_repeat.php) was implemented by using the display grid property to create a grid then using the repeat() function inside the grid-template-columns to define a grid with a specific repeating patern
- [w3schools](https://www.w3schools.com/cssref/func_repeat.php)'s Code was used because I wanted to display my about and project using a grid but it had been a while since I used grid. I mostly stick with flex. So I had to remind myself how to use grid.
- [w3schools](https://www.w3schools.com/cssref/func_repeat.php)'s Code was modified by changing the stylings to fit my particular preferences.

### Project.jsx

_Lines 3 - 15_

```
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
```

The code above was created by adapting the code in [react.dev](https://react.dev/learn/passing-props-to-a-component) as shown below:

```
function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
```

- The code in [react.dev](https://react.dev/learn/passing-props-to-a-component) was implemented by passing props to a react component in order to programatically pick the contents of the components
- [react.dev](https://react.dev/learn/passing-props-to-a-component)'s Code was used because I had use props before on a previous project but its been a while so I needed a refresher.
- [react.dev](https://react.dev/learn/passing-props-to-a-component)'s Code was modified by chainging the component to fit the needs of my website.

## Artificial Intelligence Tools Used

- [ChatGPT](https://chatgpt.com/) - The AI Tool used

### Prompt Used on _ChatPGT_

```
I have a useState in my header.jsx that I want to reference on my footer.jsx
```

Further prompts can be found in [ChatGPT](https://chatgpt.com/share/67dc807c-0f3c-800b-aa82-98d76fecf2b7)

The code prompt above was used [ChatGPT](https://chatgpt.com/share/67dc807c-0f3c-800b-aa82-98d76fecf2b7) to generate the code shown below:

```
import { createContext, useState, useContext, useEffect } from "react";

const LIGHT_THEME = "light-theme";
const DARK_THEME = "dark-theme";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || DARK_THEME
	);

	useEffect(() => {
		if (theme === LIGHT_THEME) {
			document.body.classList.remove(DARK_THEME);
			document.body.classList.add(LIGHT_THEME);
		} else {
			document.body.classList.remove(LIGHT_THEME);
			document.body.classList.add(DARK_THEME);
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	return useContext(ThemeContext);
}

```

#### ThemeProvider.jsx

_Lines 1 - 32_

```
import { createContext, useState, useContext, useEffect } from "react";
import { DARK_THEME, LIGHT_THEME } from "../constants/constants";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		() => localStorage.getItem("theme") || DARK_THEME
	);

	useEffect(() => {
		if (theme === LIGHT_THEME) {
			document.body.classList.remove(DARK_THEME);
			document.body.classList.add(LIGHT_THEME);
		} else {
			document.body.classList.remove(LIGHT_THEME);
			document.body.classList.add(DARK_THEME);
		}
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	return useContext(ThemeContext);
}

```

- The code in [ChatGPT](https://chatgpt.com/share/67dc807c-0f3c-800b-aa82-98d76fecf2b7) was implemented by using the React context API to pass the theme variable between different pages without having to pass it through multiple component props
- [ChatGPT](https://chatgpt.com/share/67dc807c-0f3c-800b-aa82-98d76fecf2b7)'s Code was used because I wanted to keep the theme consistent through my whole website. I didn't know how to share useState variables globally, so I asked GPT and it told me about React Context
- [ChatGPT](https://chatgpt.com/share/67dc807c-0f3c-800b-aa82-98d76fecf2b7)'s Code was modified by using constants. Other than that I didn't change it much because this is mostly a utility class.

## Acknowledgments

- LinkedIn Icon used in the footer (https://brand.linkedin.com/downloads)
- GitHub Icon used in the footer (https://github.com/logos)
- Gmail Icon used in the footer (https://www.flaticon.com/free-icon/gmail-logo_60543?term=gmail&page=1&position=1&origin=tag&related_id=60543)
- Realtime Colors - My Goat (https://www.realtimecolors.com/)
- Shoutouts to React Icons for being awesome (https://react-icons.github.io/react-icons/)
