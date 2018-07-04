import React from 'react';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

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
						<p>List of methods and callbacks for Kit Modal</p>
						<h2 className={s.h2}>Methods</h2>
						<h3 className={s["h3"]}>.show()</h3>
						<p>
							Show selected modal window
							<br/>Example:
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								{'kit.modal.MyModalName.show();'}
							</CodeHighlight>
						</div>
						<h3 className={s["h3"]}>.hide()</h3>
						<p>
							Hide selected modal window
							<br/>Example:
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								{'kit.modal.MyModalName.hide();'}
							</CodeHighlight>
						</div>
						<p>Or</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								&lt;button onClick="this.modal.hide()"&gt;CLOSE&lt;/button&gt;
							</CodeHighlight>
						</div>
						<h3 className={s["h3"]}>.addTrigger(element / '.selector')</h3>
						<p>
							Takes a className, or DOM element, and set it's as a trigger, to show modal window.
							<br/>Useful when you making list of triggers with asynchronous way.
							<br/>Example:
						</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								{'kit.modal.MyModalName.addTrigger(".modal_trigger");'}
							</CodeHighlight>
						</div>
						<h2 className={s.h2}>Callbacks</h2>
						<p>List of callbacks, which allows you to pass a function, and activate in on modal event</p>
						<p>Pass callbacks as a option like this:</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								<span className={s.codeLine}>{'function showHandler(event){\n console.log(event) \n console.log(this)\n});'}</span>
								<span className={s.codeLine}>{'kit.modal.createModal(\'Name\',{\n    onShow: \'showHandler\'\n});'}</span>
							</CodeHighlight>
						</div>
						<h3 className={s["h3"]}>onShow(event)</h3>
						<p>Activates when modal is shows up, also passing an event, if modal was summoned by user activated the trigger.</p>

						<h3 className={s["h3"]}>onHide()</h3>
						<p>Activates when modal was hided.</p>

						<h3 className={s["h3"]}>onTrigger()</h3>
						<p>Activates when user activates the trigger.</p>
					</div>
				</div>
			</section>
		)
	}
}
export default Functions;
