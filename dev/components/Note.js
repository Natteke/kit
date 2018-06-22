import React from 'react';
import s from '../styles/componentStyles/Note.css'

let Note = (props) => {
	return (
		<div className={s.noteContainer}>
			<div className={s.noteText}>
				{props.children}
			</div>
			<p className={s.noteAuthor}>&mdash;{props.author}</p>
		</div>
	)
};

export default Note;