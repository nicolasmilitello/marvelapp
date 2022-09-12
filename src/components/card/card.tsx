import React from 'react';
import { Link } from 'react-router-dom';

//* components
import BookmarkIcon from '../bookmark-icon/bookmark-icon';
import HideResourceIcon from '../hide-resource-icon/hide-resource-icon';

//* interfaces
import { CharactersInterface } from '../../interfaces/characters-response-api';
import { SingleComicInterface } from '../../interfaces/single-comic-response-api';

//* styles
import './card.styles.scss';

type CardProps = {
	id: number;
	imgUrl: string;
	name: string;
	type: 'characters' | 'comics' | 'stories';
	element: SingleComicInterface | CharactersInterface;
};

const Card = ({ id, imgUrl, name, type, element }: CardProps) => {
	return (
		<Link to={`/${type}/${id}`}>
			<div className='cardContainer' id={`${id}`}>
				<img src={imgUrl} alt={name} />
				<BookmarkIcon id={id} type={type} element={element} />
				<HideResourceIcon id={id} type={type} element={element} />
				<p className='cardContainer__title'>{name}</p>
			</div>
		</Link>
	);
};

export default Card;
