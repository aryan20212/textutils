import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
	const [mode, setMode] = useState("light");
	const toggleMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#2c3e50";
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
		}
	};
	const [alert, setAlert] = useState(null);
	const showAlert = (type, message) => {
		setAlert({
			mainMessage: type,
			msg: message,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};

	return (
		<>
			<Router>
				<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<div className="container my-3">
					<Routes>
						<Route path="/about" element={<About mode={mode} />}></Route>
						<Route
							path="/"
							element={
								<Form
									title="Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces"
									alert={showAlert}
									mode={mode}
								/>
							}
						></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
