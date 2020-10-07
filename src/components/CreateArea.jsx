import React from "react";

function CreateArea(props) {
	return (
		<div>
			<form>
				<input
					onChange={props.handle}
					name="title"
					placeholder="Title"
					value={props.note.title}
				/>
				<textarea
					onChange={props.handle}
					name="content"
					value={props.note.content}
					placeholder="Take a note..."
					rows="3"
				/>
				<button onClick={props.add}>Add</button>
			</form>
		</div>
	);
}

export default CreateArea;
