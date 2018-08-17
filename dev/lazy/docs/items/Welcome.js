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
						<p>Kit Lazy is a fast, lightweight and flexible plugin that speeds up your web application by loading images as they enter the viewport. It's written in "vanilla" JavaScript, cross-browser enough to work in IE 10, and also supports images that were generated with Asynchronous way.</p>
						<h2 className={s.h2}>New Features</h2>
						<ul className={s.list}>
							<li>Asynchronous images support</li>
							<li>Callback on image replace click</li>
							<li>Asynchronous demo</li>
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
							<li>React demo (They are compatible as is, actually))</li>
							<li>React Component</li>
							<li>KIT NPM Package</li>
						</ul>
						<h2 className={s.h2}>How do i get more features?</h2>
						<p>You can:</p>
						<ul className={s.list}>
							<li>Request more features in the <a href="https://github.com/Natteke/kit.lazy">repository</a>.</li>
							<li>Add some feature and merge it with original plugin.</li>
						</ul>
						<h2 className={s.h2}>Something went wrong?</h2>
						<p>You can:</p>
						<ul className={s.list}>
							<li>Create an <a href="https://github.com/Natteke/kit.lazy/issues">issue</a>.</li>
							<li>Ask for a <a href="https://stackoverflow.com/">help</a>.</li>
							<li>Submit <a href="https://github.com/Natteke/kit.lazy/issues">solution</a>.</li>
						</ul>
					</div>
				</div>
			</section>
		)
	}
}
export default Welcome;
