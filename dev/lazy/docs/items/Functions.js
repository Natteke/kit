import React from 'react';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "../../../../node_modules/highlight.js/styles/arduino-light.css";

class Functions extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Functions</h1>
						<p>List of methods and callbacks for Kit Lazy</p>
						<h2 className={s.h2}>Methods</h2>
						<h3 className={s["h3"]}>.load()</h3>
						<p>
							Updates working list with the new images, if they were generated
							<br/>Example:
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								{'kit.lazy.load();'}
							</CodeHighlight>
						</div>
						<h2 className={s.h2}>Callbacks</h2>
						<p>List of callbacks, which allows you to pass a function, and activate it on some event</p>
						<p>Pass callbacks as a option like this:</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								<span className={s.codeLine}>{'function showHandler(image){\n\t console.log(image) \n});\n\n'}</span>
								<span className={s.codeLine}>{'kit.createLazy({\n\tonReplace: showHandler\n});'}</span>
							</CodeHighlight>
						</div>
						<h3 className={s["h3"]}>onReplase(event)</h3>
						<p>Fires when image were replaced, and pass the image-element as an argument.</p>
					</div>
				</div>
			</section>
		)
	}
}
export default Functions;
