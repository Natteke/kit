import React from 'react';
import Note from '../../../components/Note.js';
import Button from '../../../components/btn/Button.js'
import StarButton from '../../../components/btn/StarButton.js'
import '../../../../plugins/modal/kit.modal.js';
import '../../../../plugins/modal/kit.modal.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-rhombus.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-square.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-stripes.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-circles.css';
import '../../../../plugins/modal/templates/loader/kit.modal.loader-spinner.css';
import b from '../../../styles/bootstrap-grid.min.css';
import s from '../../../styles/common.css';
import CodeHighlight from 'code-highlight';
import "highlight.js/styles/arduino-ligh-custom.css";

class Loader extends React.Component {
	constructor(props) {
		super(props);
	}

	handleClick = (e) => {
		e.persist();
		setTimeout(() => e.target.modal.hide(), 3000);
	};

	componentDidMount() {
		document.kit.modal.createModal('square',{
			required: true,
			stageIn: 'fadeIn',
			stageOut: 'fadeOut'
		});
		document.kit.modal.createModal('rhombus',{
			required: true,
			stageIn: 'fadeIn',
			stageOut: 'fadeOut'
		});
		document.kit.modal.createModal('stripes',{
			required: true,
			stageIn: 'fadeIn',
			stageOut: 'fadeOut'
		});
		document.kit.modal.createModal('circles',{
			required: true,
			stageIn: 'fadeIn',
			stageOut: 'fadeOut'
		});
		document.kit.modal.createModal('spinner',{
			required: true,
			stageIn: 'fadeIn',
			stageOut: 'fadeOut'
		});
	}

	render() {
		return(
			<section className={s.commonSection}>
				<div className={b.container}>
					<div className={b.row}>
						<div className={b.col}>
							<h1 className={s.h1}>Modal Loader</h1>
							<p>Let's pretend that we are requesting any data from the server. <br/> Press the button!</p>
							<div className={s["btn-container"]}>
								<StarButton onClick={this.handleClick} data-trigger="circles">To the stars!</StarButton>
							</div>
							<p>Agree, it's nice to know that the site responded, and started doing something after clicking the button, right?</p>
							<h2 className={s.h2}>Why this is so important?</h2>
							<p>Preloader is useful interface element that let visitors know that the website hasn’t crashed, it’s just processing some data.
								<br/> Do not underestimate it.</p>
							<p>Try some more of them</p>
							<div className={b.row}>
								<div className={b["col-6"]}>
									<div className={s["btn-container"]}>
										<Button onClick={this.handleClick} data-trigger="rhombus">Rhombus</Button>
									</div>
								</div>
								<div className={b["col-6"]}>
									<div className={s["btn-container"]}>
										<Button onClick={this.handleClick} data-trigger="stripes">Stripes</Button>
									</div>
								</div>
								<div className={b["col-6"]}>
									<div className={s["btn-container"]}>
										<Button onClick={this.handleClick} data-trigger="square">Square</Button>
									</div>
								</div>
								<div className={b["col-6"]}>
									<div className={s["btn-container"]}>
										<Button onClick={this.handleClick} data-trigger="spinner">Spinner</Button>
									</div>
								</div>
							</div>

							<h2 className={s.h2}>So how do we make one of them?</h2>
							<p>As an example i will use the first one, with circles. <br/> Others connecting with the same way as this one, just select one(or many) of the styles, and copy html markup.</p>
							<Note>
								Don't forget, nothing can stop you from making your own styles, markups and animations. <br/>
								Just put your HTML inside of the modal_stage, and... you know what to do.
							</Note>
							<h3 className={s.h3}>CSS</h3>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.css&quot;&gt;</span>
									<span className={s.codeLine}>&lt;link rel=&quot;stylesheet&quot; href=&quot;/styles/kit.modal.loader-circles.css&quot;&gt;</span>
								</CodeHighlight>
							</div>
							<h3 className={s.h3}>HTML</h3>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;div data-modal=&quot;circles&quot; class=&quot;kit_modal kit_none circles&quot;&gt;</span>
									<div className={s.code_levels}>
										<span className={s.codeLine}>&lt;div class=&quot;modal_stage circles-stage&quot;&gt;</span>
										<div className={s.code_levels}>
											<span className={s.codeLine}>&lt;div class=&quot;sk-fading-circle&quot;&gt;</span>
											<div className={s.code_levels}>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle1 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle2 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle3 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle4 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle5 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle6 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle7 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle8 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle9 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle10 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle11 sk-circle&quot;&gt;&lt;/div&gt;</span>
												<span className={s.codeLine}>&lt;div class=&quot;sk-circle12 sk-circle&quot;&gt;&lt;/div&gt;</span>
											</div>
											<span className={s.codeLine}>&lt;/div&gt;</span>
										</div>
										<span className={s.codeLine}>&lt;/div&gt;</span>
									</div>
									<span className={s.codeLine}>&lt;/div&gt;</span>
								</CodeHighlight>
							</div>
							<h3 className={s.h3}>JS</h3>
							<div className={s.codeContainer}>
								<CodeHighlight language="html">
									<span className={s.codeLine}>&lt;script src=&quot;/js/kit.modal.js&quot;&gt;&lt;/script&gt;</span>
								</CodeHighlight>
							</div>
							<div className={s.codeContainer}>
								<CodeHighlight language="javascript">
									<span className={s.codeLine}>{'document.kit.modal.createModal(\'circles\',{\n    required: true,\n    stageIn: \'fadeIn\',\n    stageOut: \'fadeOut\'\n});'}</span>
								</CodeHighlight>
							</div>
							<h2 className={s.h2}>So what to do with it?</h2>
							<p>
								You set up everything you need to use KitModal a preloader.
								<br/>Next time when you will load something from server, or calculate something heavy, just show modal when you starts, and hide it in the end.
								<br/>Like this:
							</p>
							<div className={s.codeContainer}>
								<CodeHighlight language="javascript">
									{'let modal = document.kit.modal.circles; \n    modal.show();\n    // do some code \n    modal.hide();'}
								</CodeHighlight>
							</div>
						</div>
					</div>
				</div>
				{/*Сделать модалки - компоненты*/}
				<div data-modal="square" className="kit_modal kit_none square">
					<div className="modal_stage square-stage">
						<div className="modal_stage square-inner"></div>
					</div>
				</div>

				<div data-modal="rhombus" className="kit_modal kit_none rhombus">
					<div className="modal_stage rhombus-stage">
						<div className="modal_stage rhombus-inner">
							<div className="sk-cube1 sk-cube"></div>
							<div className="sk-cube2 sk-cube"></div>
							<div className="sk-cube4 sk-cube"></div>
							<div className="sk-cube3 sk-cube"></div>
						</div>
					</div>
				</div>

				<div data-modal="stripes" className="kit_modal kit_none stripes">
					<div className="modal_stage stripes-stage">
						<div className="modal_stage stripes-inner">
							<div className="rect1"></div>
							<div className="rect2"></div>
							<div className="rect3"></div>
							<div className="rect4"></div>
							<div className="rect5"></div>
						</div>
					</div>
				</div>

				<div data-modal="circles" className="kit_modal kit_none circles">
					<div className="modal_stage circles-stage">
						<div className="sk-fading-circle">
							<div className="sk-circle1 sk-circle"></div>
							<div className="sk-circle2 sk-circle"></div>
							<div className="sk-circle3 sk-circle"></div>
							<div className="sk-circle4 sk-circle"></div>
							<div className="sk-circle5 sk-circle"></div>
							<div className="sk-circle6 sk-circle"></div>
							<div className="sk-circle7 sk-circle"></div>
							<div className="sk-circle8 sk-circle"></div>
							<div className="sk-circle9 sk-circle"></div>
							<div className="sk-circle10 sk-circle"></div>
							<div className="sk-circle11 sk-circle"></div>
							<div className="sk-circle12 sk-circle"></div>
						</div>
					</div>
				</div>

				<div data-modal="spinner" className="kit_modal kit_none stripes">
					<div className="modal_stage stripes-stage">
						<div className="spinner">
							<div className="cube1"></div>
							<div className="cube2"></div>
						</div>
					</div>
				</div>



			</section>
		)
	}

}

export default Loader;
