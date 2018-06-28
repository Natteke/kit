import React from 'react';
import s from '../styles/componentStyles/Note.css'

let Note = (props) => {
	let author = props.author ? <p className={s.noteAuthor}>&mdash;{props.author}</p> : null;
	return (
		<div className={s.noteContainer}>
			<div className={s.noteText}>
				{props.children}
			</div>
			{author}
		</div>
	)
};

export default Note;