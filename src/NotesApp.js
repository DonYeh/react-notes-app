import React, { Component } from "react";
import NotesList from "./NotesList";
import NotesDetail from "./NotesDetail";
import styles from "./NotesApp.module.css";
export default class NotesApp extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedNote: "1001",
			notes: [
				// This will hold an array of objects
				{
					id: "1001",
					title: "first note",
					text: "this is the first note"
				},
				{
					id: "1002",
					title: "second note",
					text: "this is the second note"
				},
				{
					id: "1003",
					title: "third note",
					text: "this is the third note"
				}
			] // This will hold an array of objects
		};
	}

	render() {
		const theNote = this.state.notes.find(
			note => this.state.selectedNote === note.id
		);
		return (
			<div className={styles.app}>
				<NotesList
					className={styles.notesList}
					notes={this.state.notes}
					handleSelection={this._selectNote}
				/>
				<NotesDetail
					className={styles.detail}
					note={theNote}
					handleSave={this._updateNote}
				/>
			</div>
		);
	}

	_selectNote = id => {
		// chose a note to show
		this.setState({
			selectedNote: id
		});
	};

	_updateNote = (idToUpdate, newText) => {
		// We can't simply assign the item in the array.
		// so, we ned to create a new array with all the existing notes.
		// but, we want to use the newText for the note with id === id

		// ===================================================
		// Version 1
		const updatedNotes1 = this.state.notes.map(note => {
			if (note.id === idToUpdate) {
				// return the modified version
				return {
					...note, // Spread out all the existing key-value pairs.
					text: newText // Overwrite *just* the text property
				};
			} else {
				// return a copy the note as is.
				return {
					...note
				};
			}
		});
		this.setState({
			notes: updatedNotes1 // Already a copy
		});

		// ===================================================
		// Version 2a:
		// const updatedNotes2 = this.state.notes.filter(note => {
		// 	return note.id !== idToUpdate;
		// });

		// const theNoteToUpdate = this.state.notes.find(
		// 	note => note.id === idToUpdate
		// );
		// this.setState({
		// 	notes: [
		// 		...updatedNotes2,
		// 		{
		// 			...theNoteToUpdate,
		// 			text: newText
		// 		}
		// 	]
		// });

		// ===================================================
		// Alternatively, version 2b:
		// this.setState({
		// 	notes: updatedNotes2.concat({
		// 		...theNoteToUpdate,
		// 		text: newText
		// 	})
		// });
	};
}
