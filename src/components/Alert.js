import React from "react";

const Alert = (props) => {
	const capEachWord = (word) => {
		let lower = word.toLowerCase();
		return lower.charAt(0).toUpperCase() + lower.slice(1);
	};
	return (
		<div style={{ height: "50px" }}>
			{props.alert && (
				<div
					className={`alert alert-${props.alert.mainMessage} alert-dismissible fade show`}
					role="alert"
				>
					<strong>{capEachWord(props.alert.mainMessage)}!</strong>
					&nbsp;
					{props.alert.msg}
				</div>
			)}
		</div>
	);
};

export default Alert;
