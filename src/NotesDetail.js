import React from "react";

function NotesEditor({ text, handleChange }) {
	return (
		<textarea
			value={text}
			onChange={e => {
				handleChange(e.target.value);
			}}
		/>
	);
}

export default class NotesDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false,
			draftText: props.note.text,
			id: props.note.id
		};
	}

	static getDerivedStateFromProps(props, state) {
		// There is no `this`.
		// So, we receive props and state as arguments.

		// Must return an object that describes
		// any modifications to state.
		if (props.note.id !== state.id) {
			return {
				id: props.note.id,
				draftText: props.note.text
			};
		}
	}

	render() {
		// declares the className and note varables
		// an assigns them to the properties from this.props
		// where the name matches
		const { className, note } = this.props;
		const { isEditing, draftText } = this.state;
		return (
			<div className={className}>
				{isEditing ? (
					<NotesEditor
						handleChange={this._changeDraftText}
						text={draftText}
					/>
				) : (
					draftText
				)}
				<br />
				<button onClick={this._toggleIsEditing}>Toggle</button>
				<button onClick={this._saveDraft}>Save</button>
			</div>
		);
	}

	_changeDraftText = newText => {
		this.setState({
			draftText: newText
		});
	};

	_saveDraft = () => {
		this.props.handleSave(this.state.id, this.state.draftText);
	};

	_toggleIsEditing = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};
}
