import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

//* custom hooks
import { useToggle } from '../../hooks/useToggle';

//* images
import logo from '../../assets/marvel_logo.png';

//* styles
import './navbar.styles.scss';

const NavBar = () => {
	const path = useLocation();

	const navRef = useRef<HTMLDivElement>(null);

	const [isOpen, setIsOpen] = useToggle();

	if (isOpen) {
		navRef.current?.classList.add('responsive_nav');
	} else {
		navRef.current?.classList.remove('responsive_nav');
	}

	const addClassDependingOnPath = (route: string) => {
		if (route === '/') {
			if (path.pathname === '/') {
				return 'navBarContainer_link-active';
			}
		} else if (path.pathname.includes(route)) {
			return 'navBarContainer_link-active';
		}

		return 'navBarContainer_link';
	};

	return (
		<div className='navBarContainer'>
			<div>
				<Link to='/'>
					<img src={logo} alt='marvel logo' />
				</Link>
				<button className='nav-btn' onClick={setIsOpen}>
					☰
				</button>
			</div>

			<nav ref={navRef}>
				<Link
					to='/'
					className={addClassDependingOnPath('/')}
					onClick={setIsOpen}
				>
					Home
				</Link>

				<Link
					to='/characters'
					className={addClassDependingOnPath('characters')}
					onClick={setIsOpen}
				>
					Characters
				</Link>

				<Link
					to='/comics'
					className={addClassDependingOnPath('comics')}
					onClick={setIsOpen}
				>
					Comics
				</Link>

				<Link
					to='/stories'
					className={addClassDependingOnPath('stories')}
					onClick={setIsOpen}
				>
					Stories
				</Link>

				<Link
					to='/bookmarks'
					className={addClassDependingOnPath('bookmarks')}
					onClick={setIsOpen}
				>
					Bookmarks
				</Link>

				<Link
					to='/hidden-resources'
					className={addClassDependingOnPath('hidden-resources')}
					onClick={setIsOpen}
				>
					Hidden Resources
				</Link>

				<button className='nav-btn nav-close-btn' onClick={setIsOpen}>
					X
				</button>
			</nav>
		</div>
	);
};

export default React.memo(NavBar);
