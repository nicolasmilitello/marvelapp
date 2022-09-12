import React from 'react';
import { Link } from 'react-router-dom';
import { StoriesInterface } from '../../interfaces/stories-response-api';

//* components
import BookmarkIcon from '../bookmark-icon/bookmark-icon';
import HideResourceIcon from '../hide-resource-icon/hide-resource-icon';

//* styles
import './story-card.styles.scss';

//* images
import logo from '../../assets/marvel_logo.png';

type StoryCardProps = {
	id: number;
	name: string;
	type: 'characters' | 'comics' | 'stories';
	element: StoriesInterface;
};

const StoryCard = ({ id, name, type, element }: StoryCardProps) => {
	return (
		<Link to={`/${type}/${id}`}>
			<div className='storyCardContainer' id={`${id}`}>
				<img src={logo} alt='logo_marvel' />
				<p>{name}</p>
				<BookmarkIcon id={id} type={type} element={element} />
				<HideResourceIcon id={id} type={type} element={element} />
			</div>
		</Link>
	);
};

export default StoryCard;
