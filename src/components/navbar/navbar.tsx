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
				<Link to='/' data-testid='logoHome-link'>
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
					data-testid='home-link'
				>
					Home
				</Link>

				<Link
					to='/characters'
					className={addClassDependingOnPath('characters')}
					onClick={setIsOpen}
					data-testid='characters-link'
				>
					Characters
				</Link>

				<Link
					to='/comics'
					className={addClassDependingOnPath('comics')}
					onClick={setIsOpen}
					data-testid='comics-link'
				>
					Comics
				</Link>

				<Link
					to='/stories'
					className={addClassDependingOnPath('stories')}
					onClick={setIsOpen}
					data-testid='stories-link'
				>
					Stories
				</Link>

				<Link
					to='/bookmarks'
					className={addClassDependingOnPath('bookmarks')}
					onClick={setIsOpen}
					data-testid='bookmarks-link'
				>
					Bookmarks
				</Link>

				<Link
					to='/hidden-resources'
					className={addClassDependingOnPath('hidden-resources')}
					onClick={setIsOpen}
					data-testid='hiddenResources-link'
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
