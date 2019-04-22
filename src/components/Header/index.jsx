import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<header className="page-header">
			<Link to='/' className="nav__link">
				<h2 className="page-header__logo">Task Tracker</h2>
      </Link>			
			<nav className="page__nav">
				<ul className="nav__list">
					<li className="nav__item">
						<Link to='/boards/'
							className="nav__link">
							Boards Control
            </Link>
					</li>
					{/* <li className="nav__item">
						<Link to='/lists'
							className="nav__link">
							Lists
            </Link>
					</li> */}
				</ul>
			</nav>
		</header>
	);
};

export default Header;