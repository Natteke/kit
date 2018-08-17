import React from 'react';
import s from '../../../styles/common.css';
import i from '../../../styles/demo-images.css';
import Note from '../../../components/Note';
import '../../../../plugins/lazy/kit.lazy.js'
import filesExample from "../../../images/lazy-demo/files-example.png";
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";
import medium from "../../../images/lazy-demo/lazy-example.jpg";
import mediumPlaceholder from "../../../images/lazy-demo/lazy-example-placeholder.jpg";



class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		kit.createLazy();
	}

	render() {
		let b = this.props.bootstrap;
		return (
			<section className={s.commonSection}>
				<div className={b.row}>
					<div className={b.col}>
						<h1 className={s.h1}>Guide</h1>
						<Note note author={'Jeremy Wagner'}>
							Lazy loading is technique that defers loading of non-critical resources at page load time. Instead, these non-critical resources are loaded at the moment of need.
						</Note>
						<h2 className={s.h2}>Preparation</h2>
						<p>First of all you will need an image, and its lightweight placeholder.</p>
						<p>It could be a blurred and compressed image, or just a monochromatic color. <a target={'_blank'}	href="https://www.google.ru/search?q=forest+wallpaper+4k">Google&nbsp;images</a> uses the second approach. Reload the search page a couple of times, to see blinking colored squares, before image will be loaded.</p>
						<img className={['kit-lazy',i.image].join(' ')} src={mediumPlaceholder} data-src={medium} alt="A screenshot of the website Medium in the browsing, demonstrating lazy loading in action. The blurry placeholder is on the left, and the loaded resource is on the right."/>
						<p>Approach is very simple, a placeholder image is loaded at page load (left), and when scrolled into the viewport, the final image loads at the time of need.</p>
						<p>Speaking of an images, you should have something like this.</p>
						<img className={[i.image].join(' ')} src={filesExample} alt="Example of files on PC"/>
						<h2 className={s.h2}>Background images</h2>
						<h3 className={s.h3}>Create image container</h3>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								<span className={s.codeLine}>&lt;div class=&quot;image image_mountains <span className={s.highlight}>kit-lazy</span>&quot;&gt;</span>
									<span className={s.code_levels}>Background Image Container</span>
								<span className={s.codeLine}>&lt;/div&gt;</span>
							</CodeHighlight>
						</div>
						<ul className={s.list}>
							<li>image&nbsp;&mdash; global image class in&nbsp;you application.</li>
							<li>image_mountains&nbsp;&mdash; modifier for specific image.</li>
							<li>kit-lazy&nbsp;&mdash; <span className={s.highlight}>required</span> default plugin class, detecting elements to work with.</li>
						</ul>
						<Note>
							You can change <span className={s.highlight}>kit-lazy</span> class, by passing another one as an <span className={s.highlight}>searchClass</span> option, while initialisation.
						</Note>
						<h3 className={s.h3}>Write css styles</h3>
						<div className={s.codeContainer}>
							<CodeHighlight language="css">
								{'.image {\n' +
								'    width: 100%;\n' +
								'    height: 300px;\n' +
								'    background: no-repeat center/cover;\n' +
								'    transition: background-image ease-in-out 0.5s;\n' +
								'}\n' +
								'\n' +
								'.image_mountains {\n' +
								'    background-image: url("/images/lazy-example-placeholder.jpg");\n' +
								'}\n' +
								'\n' +
								'.image_mountains.loaded {\n' +
								'    background-image: url("/images/lazy-example.jpg");\n' +
								'}'}
							</CodeHighlight>
						</div>
						<p>When the image hits the viewport, <span className={s.highlight}>kit-lazy</span> will add <span className={s.highlight}>loaded</span> class to the container, and placeholder will be changed to original image.</p>
						<Note>
							You can change <span className={s.highlight}>loaded</span> class, by passing another one as an <span className={s.highlight}>success</span> option, while initialisation.
						</Note>
						<h2 className={s.h2}>Tag images</h2>
						<h3 className={s.h3}>Create image</h3>
						<div className={s.codeContainer}>
							<CodeHighlight language="html">
								{"<img " +
								"class='kit-lazy'\n" +
								"src='/images/lazy-example-placeholder.jpg'\n" +
								"data-src='/images/lazy-example.jpg'\n" +
								"alt='Lazy Image'/>"}
							</CodeHighlight>
						</div>
						<ul className={s.list}>
							<li>kit-lazy&nbsp;&mdash; <span className={s.highlight}>required</span> default plugin class, detecting elements to work with.</li>
							<li>src&nbsp;&mdash; <span className={s.highlight}>required</span> attribute image attribute, place where you should put a placeholder image first.</li>
							<li>data-src&nbsp;&mdash; <span className={s.highlight}>required</span> plugin attribute with link, to the original image.</li>
						</ul>
						<p>When the image hits the viewport, <span className={s.highlight}>kit-lazy</span> will put link from <span className={s.highlight}>data-src</span> in to <span className={s.highlight}>src</span>, so the image will be replaced with the original one</p>
						<h2 className={s.h2}>Asynchronous images loading</h2>
						<p>Kit-lazy pretty flexible in this case, it using an array with all not-loaded images and pop them out of there, after they were loaded.</p>
						<div className={s.codeContainer}>
							<CodeHighlight language="javascript">
								<span className={s.codeLine}>{'kit.lazy.load()'}</span>
							</CodeHighlight>
						</div>
						<p>Call the <span className={s.highlight}>load()</span> method to search for a new elements with search-class (<span className={s.highlight}>kit-lazy</span> by default), and add them to the working list.</p>
					</div>
				</div>
			</section>
		)
	}
}
export default Welcome;
