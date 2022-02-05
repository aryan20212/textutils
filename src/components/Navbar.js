import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
	const modPellet = (e) => {
		let color = "#" + e.target.id;
		document.body.style.backgroundColor = color;
	};
	return (
		<nav
			className={`navbar navbar-expand-lg navbar-${
				props.mode === "light" ? "light" : "dark"
			} bg-${props.mode === "light" ? "light" : "dark"}`}
			style={{
				color: props.mode === "light" ? "black" : "white",
			}}
		>
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					{props.title}
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/about">
								About
							</Link>
						</li>
					</ul>

					<div className="d-flex">
						<div className="backgroundColours">
							<div
								className="colorOp"
								onClick={(e) => modPellet(e)}
								id="2ecc71"
								style={{ backgroundColor: "#2ecc71" }}
							></div>
							<div
								className="colorOp"
								onClick={(e) => modPellet(e)}
								id="3498db"
								style={{ backgroundColor: "#3498db" }}
							></div>
							<div
								className="colorOp"
								onClick={(e) => modPellet(e)}
								id="f1c40f"
								style={{ backgroundColor: "#f1c40f" }}
							></div>
							<div
								className="colorOp"
								onClick={(e) => modPellet(e)}
								id="e74c3c"
								style={{ backgroundColor: "#e74c3c" }}
							></div>
							<div
								className="colorOp"
								onClick={(e) => modPellet(e)}
								id="ecf0f1"
								style={{ backgroundColor: "#ecf0f1" }}
							></div>
							<div
								className="colorOp"
								onClick={(e) => modPellet(e)}
								id="7f8c8d"
								style={{ backgroundColor: "#7f8c8d" }}
							></div>
						</div>
						<div className="form-check form-switch">
							<input
								className="form-check-input"
								type="checkbox"
								role="switch"
								id="flexSwitchCheckDefault"
								onChange={props.toggleMode}
							/>
							<label
								className="form-check-label"
								htmlFor="flexSwitchCheckDefault"
							>
								{props.mode === "light" ? "Dark Mode" : "Light Mode"}
							</label>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
Navbar.propTypes = {
	title: PropTypes.string,
	mode: PropTypes.string,
};

Navbar.defaultProps = {
	title: "This Is title",
	mode: "light",
};
export default Navbar;
