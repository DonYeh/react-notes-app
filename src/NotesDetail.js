import React from "react";

function NotesEditor({ text }) {
	return <textarea value={text} />;
}

export default class NotesDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isEditing: false
		};
	}

	render() {
		// declares the className and note varables
		// an assigns them to the properties from this.props
		// where the name matches
		const { className, note } = this.props;
		const { isEditing } = this.state;
		return (
			<div className={className}>
				{isEditing ? <NotesEditor text={note.text} /> : note.text}
				<button onClick={this._toggleIsEditing}>Toggle</button>
			</div>
		);
	}

	_toggleIsEditing = () => {
		this.setState({
			isEditing: !this.state.isEditing
		});
	};
}
