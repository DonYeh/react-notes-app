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
				<NotesDetail className={styles.detail} note={theNote} />
			</div>
		);
	}

	_selectNote = id => {
		// chose a note to show
		this.setState({
			selectedNote: id
		});
	};
}
