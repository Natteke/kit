import React from 'react';
import s from '../../../styles/common.css';

class Options extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Options</h1>
						<p>List of options for Kit Modal</p>
						<h3 className={s["h3-border"]}>Required</h3>
						<ul className={s.list}>
							<li>Type: boolean</li>
							<li>Default: false</li>
						</ul>
						<p>Required window could be closed only using hide() method.</p>
						<h3 className={s["h3-border"]}>preventDefault</h3>
						<ul className={s.list}>
							<li>Type: boolean</li>
							<li>Default: false</li>
						</ul>
						<p>
							Prevent default action, when users click on trigger
							<br/>Link for example.
						</p>
						<h3 className={s["h3-border"]}>storeInstances</h3>
						<ul className={s.list}>
							<li>Type: boolean/string</li>
							<li>Default: true</li>
							<li>Options: true/false/string</li>
						</ul>
						<p>
							Kit Modal stores link to it's instances within all elements inside '.kit_modal'.
							<br/>It's allows you easily to get Kit Modal from any inner elements, which is useful in creating buttons for example. (See Basic demo).
						</p>
						<p>Pass false as an option to disable it, or pass the string '.className', to chose elements, where you want to store links.</p>
						<h3 className={s["h3-border"]}>Required</h3>
						<ul className={s.list}>
							<li>Type: boolean</li>
							<li>Default: false</li>
						</ul>
						<p>Required window could be closed only using show() method.</p>
						<h3 className={s["h3-border"]}>Position</h3>
						<ul className={s.list}>
							<li>Type: string</li>
							<li>Default: fixed</li>
							<li>Options: fixed/absolute</li>
						</ul>
						<p>Allows you to put modal window inside container.</p>
						<h3 className={s["h3-border"]}>lockScroll</h3>
						<ul className={s.list}>
							<li>Type: boolean</li>
							<li>Default: true</li>
						</ul>
						<p>Allows you to lock scroll while modal is active</p>
						<h3 className={s["h3-border"]}>Fixed</h3>
						<ul className={s.list}>
							<li>Type: string</li>
							<li>Default: null</li>
						</ul>
						<p>If you have another fixed element on the page, and you want to prevent user's scroll while Kit Modal is active, provide it's '.className' here, to prevent horizontal jumping</p>
					</div>
				</div>
			</section>
		)
	}
}
export default Options;
