import React from 'react';
import { Link } from 'react-router-dom';

//* images
import avengers from '../../assets/avengers.png';
import marvelLogo from '../../assets/marvel_logo.png';
import comics from '../../assets/comics.jpg';
import characters from '../../assets/characters.jpg';
import stories from '../../assets/stories.jpg';
import avengersFooter from '../../assets/avengers_1.png';

//* styles
import './home.styles.scss';

const Home = () => {
	return (
		<div className='homeContainer'>
			<div className='homeContainer__headerImagesContainer'>
				<img
					className='homeContainer__headerImagesContainer__avengers'
					src={avengers}
					alt='avengers'
				/>
				<img
					className='homeContainer__headerImagesContainer__logo'
					src={marvelLogo}
					alt='avengers'
				/>
			</div>

			<p className='homeContainer__information'>
				<span>Marvel Entertainment</span>, LLC, a wholly-owned
				subsidiary of <span>The Walt Disney Company</span>, is one of
				the world's most prominent character-based entertainment
				companies, built on a proven library of{' '}
				<span>more than 8,000 characters</span> featured in a variety of
				media over <span>seventy-five years</span>. Marvel utilizes its
				character franchises in entertainment, licensing and publishing.
			</p>

			<div className='homeContainer__imagesSection'>
				<Link to='/stories'>
					<img
						className='homeContainer__imagesSectionVersionOne__image'
						src={comics}
						alt='comics'
					/>
					<p className='homeContainer__imagesSectionVersionOne__title'>
						THE <br /> BEST <br /> STORIES
					</p>
				</Link>
			</div>

			<div className='homeContainer__imagesSection'>
				<Link to='/characters'>
					<img
						className='homeContainer__imagesSectionVersionTwo__image'
						src={characters}
						alt='characters'
					/>
					<p className='homeContainer__imagesSectionVersionTwo__title'>
						THE <br /> BEST <br /> CHARACTERS
					</p>
				</Link>
			</div>

			<div className='homeContainer__imagesSection'>
				<Link to='/comics'>
					<img
						className='homeContainer__imagesSectionVersionOne__image'
						src={stories}
						alt='stories'
					/>
					<p className='homeContainer__imagesSectionVersionOne__title'>
						THE <br /> BEST <br /> COMICS
					</p>
				</Link>
			</div>

			<img
				className='homeContainer__headerImagesContainer__lastPicture'
				src={avengersFooter}
				alt='avengers'
			/>

			<p className='homeContainer__information'>
				For more information visit marvel.com. © 2020 MARVEL.
			</p>
		</div>
	);
};

export default Home;
