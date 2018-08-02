import React from 'react';
import 'promise-polyfill/src/polyfill';
import '../styles/main.css';
import s from '../styles/componentStyles/header.css'
import h from '../styles/componentStyles/btn/Hamburger.css'
import logo from '../images/git.png'
let timer;

import HamburgerBtn from './btn/Hamburger.js';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navOpen: false
		}
	}

	handleClick= () => this.setState({navOpen: !this.state.navOpen});

	handleBlur = (e) => {
		e.persist();
		console.dir(e);
		console.dir(e.relatedTarget);
		if(e.relatedTarget && e.relatedTarget.nodeName === 'A') {
			console.dir('goes focus');
			return e.target.focus();}
		timer = setTimeout(() => {
			this.setState({ navOpen: false })
		},0)
	};

	handleFocus = (e) => clearTimeout(timer);

	render() {
		let navStyle = this.state.navOpen ?
			[s.headerContainer, s.headerNavActive].join(' ') : s.headerContainer;
		let hamburgerActive = this.state.navOpen ? h.hamburgerActive  : '';

		let links = this.props.links.map((e)=>{
			return <a key={'header_' + e.name}
					  download={e.download}
					  href={e.href}
					  tabIndex={0}
					  className={s.headerNavItem}>{e.name}</a>
		});

		return(
			<div className={s.headerOuterContainer}>
				<header className={[s.header, 'kit-set-fixed'].join(' ')}>
					<div className={s.wrapper}>
						<div className={navStyle}>
							<div className={s.headerHamburgerContainer}>
								<HamburgerBtn active={hamburgerActive}
											  onClick={this.handleClick}
											  onBlur={this.handleBlur}
											  onFocus={this.handleFocus}
											  styles={h}
								/>
							</div>
							<a href={this.props.git} className={s.headerGitContainer}>
								<img src={logo} alt=""/>
								<p>Find&nbsp;me&nbsp;on&nbsp;GitHub</p>
							</a>
							<div tabIndex={0} className={s.headerNavContainer}>
								<nav className={s.headerNav}>
									{links}
								</nav>
							</div>
						</div>
					</div>
				</header>
			</div>
		)
	}
}

export default Header;