import React from 'react';
import s from '../../../styles/common.css';



class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Welcome</h1>
						<p>Kit Modal is the javascript plugin, created to speed up your process of creating dialogs, notifications and pre-loaders for your web application.</p>
						<h2 className={s.h2}>New Features</h2>
						<ul className={s.list}>
							<li>Asynchronous triggers support</li>
							<li>Callback on trigger click</li>
							<li>Prevent window scrolling support</li>
							<li>Now window can be put in to container</li>
							<li>More demos and ways of use</li>
						</ul>
						<h3 className={s.h3}>Compatibility</h3>
						<ul className={s.list}>
							<li>Chrome</li>
							<li>Safari</li>
							<li>Firefox</li>
							<li>IE 10+</li>
							<li>Opera</li>
						</ul>
						<h3 className={s.h3}>Expect soon</h3>
						<ul className={s.list}>
							<li>More default styles</li>
							<li>React demo (They are compatible as is, actually))</li>
							<li>React Component</li>
							<li>KIT NPM Package</li>
						</ul>
						<h2 className={s.h2}>How do i get more features?</h2>
						<p>You can:</p>
						<ul className={s.list}>
							<li>Request more features in the <a href="https://github.com/Natteke/kit.modal">repository</a>.</li>
							<li>Add some feature and merge it with original plugin.</li>
						</ul>
						<h2 className={s.h2}>Something went wrong?</h2>
						<p>You can:</p>
						<ul className={s.list}>
							<li>Create an <a href="https://github.com/Natteke/kit.modal/issues">issue</a>.</li>
							<li>Ask for a <a href="https://stackoverflow.com/">help</a>.</li>
							<li>Submit <a href="https://github.com/Natteke/kit.modal/issues">solution</a>.</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}
export default Welcome;
