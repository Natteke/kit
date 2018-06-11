import React from 'react';
import main from '../styles/main.css';
import s from '../styles/componentStyles/header.css'
import h from '../styles/componentStyles/btn/Hamburger.css'
let timer;

import HamburgerBtn from './btn/Hamburger.js';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navOpen: false
		}
	}

	handleClick=()=>{this.setState({navOpen: !this.state.navOpen})};
	handleBlur = (e) => {
		if(e.relatedTarget && e.relatedTarget.nodeName === 'A') return e.target.focus();
		timer = setTimeout(() => {
			this.setState({
				navOpen: false
			})
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
					  className={s.headerNavItem}
			>{e.name}</a>
		});

		return(
			<div className={s.headerOuterContainer}>
				<header className={s.header}>
					<div className={s.wrapper}>
						<div className={navStyle}>
							<div className={s.headerHamburgerContainer}>
								<HamburgerBtn active={hamburgerActive}
											  styles={h}
											  onClick={this.handleClick}
											  onBlur={this.handleBlur}
											  onFocus={this.handleFocus}
								/>
							</div>
							<div className={s.headerNavContainer}>
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