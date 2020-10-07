import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
	const [note, setNote] = useState({
		title: "",
		content: ""
	});

	const [notes, setNotes] = useState([]);

	function handleChange(event) {
		const { name, value } = event.target;
		setNote((prev) => {
			if (name === "title") {
				return {
					title: value,
					content: prev.content
				};
			} else if (name === "content") {
				return {
					title: prev.title,
					content: value
				};
			}
		});
	}

	function addNote(event) {
		setNotes((prev) => [...prev, note]);
		event.preventDefault();
	}

	function deleteNote(id) {
		setNotes((prev) => {
			return prev.filter((note, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<CreateArea handle={handleChange} note={note} add={addNote} />
			{notes.map((note, index) => (
				<Note
					key={index}
					id={index}
					title={note.title}
					content={note.content}
					delete={deleteNote}
				/>
			))}
			<Footer />
		</div>
	);
}

export default App;
