import React from "react";

const About = (props) => {
	return (
		<div style={{ color: props.mode === "dark" ? "white" : "black" }}>
			<div
				className={`p-5 abcc mb-4 ${
					props.mode === "dark" ? "bg-dark text-light" : "bg-light text-dark"
				} rounded-3`}
			>
				<div className="container-fluid py-5">
					<h1 className="display-5 fw-bold">About Me</h1>
					<p className="col-md-8 fs-5">
						I am Aryan. I am a student and a hobbiest coder and web developer.
						This is my first project with react and it's awesome. This website
						is a text manipulater utility that you can use to manipulate your
						text as per your needs. It's very awesome utility created by
						codewithharry. You can visit his channel by clicking on the button
						below. .
					</p>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.youtube.com/c/CodeWithHarry"
					>
						<button className="btn btn-danger btn-lg" type="button">
							<ion-icon className="my-1" name="logo-youtube"></ion-icon> Youtube
							Channel
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
