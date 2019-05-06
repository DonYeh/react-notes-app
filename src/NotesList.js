import React from "react";
import styles from "./NotesList.module.css";

function NotesListItem({ id, text, handleClick }) {
	return (
		<li>
			<a
				href="#"
				onClick={e => {
					e.preventDefault();
					console.log("you clicked");
					handleClick(id);
				}}
			>
				{text}
			</a>
		</li>
	);
}

export default function NotesList({ notes, className, handleSelection }) {
	// how do we combine styles?
	console.log(className);
	console.log(styles.notesList);

	// Note: allowing styling from the parent
	// may ahve unintended consequences.
	// Parent styles may take precedence, which
	// goes against per-component styling.

	// const items = notes.map(({title}) => <NotesListItem text={title}/>);
	const items = notes.map(note => (
		<NotesListItem
			id={note.id}
			text={note.title}
			handleClick={handleSelection}
		/>
	));

	return <ul className={`${styles.notesList} ${className}`}>{items}</ul>;
}
