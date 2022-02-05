import React, { useState } from "react";

const Form = (props) => {
	const handleOnChange = (e) => {
		setText(e.target.value);
	};
	const handleOnUPClick = () => {
		if (text !== "") {
			setText(text.toUpperCase());
			props.alert("success", "CONVERTED TO UPPER CASE");
		} else {
			props.alert("danger", "Nothing to Convert To upper case");
		}
	};
	const handleOnLClick = () => {
		if (text !== "") {
			setText(text.toLowerCase());
			props.alert("success", "conveted to lower case");
		} else {
			props.alert("danger", "Nothing to Convert to lower case");
		}
	};
	const handleOncapeachClick = () => {
		if (text !== "") {
			let dataArr = text.split(" ");
			let ans = "";
			dataArr.forEach((element) => {
				let newdata =
					element.substr(0, 1).toUpperCase() + element.substr(1).toLowerCase();
				ans += `${newdata} `;
			});
			ans = ans.trim(" ");
			setText(ans);
			props.alert("success", "Capitalised Each Word");
		} else {
			props.alert("danger", "Nothing to Capitalise");
		}
	};
	const findWords = () => {
		let real = [];
		text.split(/\s+/gi).forEach((element) => {
			if (element !== "") {
				real.push(element);
			}
		});
		return real.length;
	};
	const handleClearText = () => {
		setText("");
		props.alert("success", "Text Cleared");
	};

	const handleCopyText = () => {
		if (text !== "") {
			window.navigator.clipboard.writeText(text);
			props.alert("success", "Text copied to clipboard");
		} else {
			props.alert("danger", "Nothing to copy");
		}
	};
	const handleOnSentenceClick = () => {
		if (text !== "") {
			let freshdatasentence = [];
			let sentencestoformat = text.split(".");
			sentencestoformat.forEach((element) => {
				let elementda = element.trim(" ");
				freshdatasentence.push(elementda);
			});

			let ans = "";

			freshdatasentence
				.filter((element) => {
					return element !== "";
				})
				.forEach((element) => {
					let newdata =
						element.substr(0, 1).toUpperCase() +
						element.substr(1).toLowerCase();
					ans += `${newdata}. `;
				});
			setText(ans);
			props.alert("success", "Converted to sentence case successfully");
		} else {
			props.alert("danger", "Nothing to convert to sentence case");
		}
	};
	const handleRemoveExtraSpaces = () => {
		let brokenSpaces = text.split(" ");
		let cleanText = [];
		brokenSpaces.forEach((element) => {

			if (element !== "") {
				cleanText.push(element);
			}
		});
		setText(cleanText.join(" "));
		props.alert("success", "Extra Spaces removed");
	};
	const findChars = () => {
		let data = text.split(" ");
		let newdatatofilter = data.filter((element) => {
			return element !== "";
		});
		return newdatatofilter.join("").length;
	};
	const [text, setText] = useState("");

	return (
		<>
			<div className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}>
				<h1 className="my-3"> {props.title} </h1>
				<textarea
					onChange={handleOnChange}
					className="form-control"
					value={text}
					id="text"
					rows="10"
					spellCheck="false"
					style={{
						backgroundColor: props.mode === "light" ? "white" : "#012d56",
						borderColor: props.mode === "light" ? "#ced4da" : "transparent",
						color: props.mode === "light" ? "black" : "white",
					}}
				></textarea>
				<button
					disabled={text.length === 0}
					onClick={handleOnUPClick}
					className="btn mx-2 btn-primary my-2"
				>
					CONVERT TO UPPERCASE
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleOnLClick}
					className="btn mx-2 btn-primary my-2"
				>
					convert to lowercase
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleOncapeachClick}
					className="btn mx-2 btn-primary my-2"
				>
					Capitalize Each Word
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleOnSentenceClick}
					className="btn mx-2 btn-primary my-2"
				>
					Sentence case
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleClearText}
					className="btn mx-2 btn-primary my-2"
				>
					Clear Text
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleCopyText}
					className="btn mx-2 btn-primary my-2"
				>
					Copy Text
				</button>
				<button
					disabled={text.length === 0}
					onClick={handleRemoveExtraSpaces}
					className="btn mx-2 btn-primary my-2"
				>
					Remove Extra Spaces
				</button>
			</div>
			<div
				className={`container text-${
					props.mode === "light" ? "dark" : "light"
				}`}
			>
				<h1>Your Summary</h1>
				<p>
					{findWords()} words and {findChars()} characters
				</p>
				<p>
					You can read this in approximately{" "}
					{0.01 *
						text.split(" ").filter((element) => {
							return element !== "";
						}).length}{" "}
					Minutes
				</p>
				<h2>Preview</h2>
				<p>{text === "" ? "Nothing To Preview" : text}</p>
			</div>
		</>
	);
};

export default Form;
