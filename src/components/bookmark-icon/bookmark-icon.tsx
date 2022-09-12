import React, { useContext, useEffect } from 'react';

//* context
import {
	AppContext,
	BookmarksAndHiddenRosourcesType,
} from '../../context/context';

//* custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';

//* interfacs
import { CharactersInterface } from '../../interfaces/characters-response-api';
import { SingleComicInterface } from '../../interfaces/single-comic-response-api';
import { StoriesInterface } from '../../interfaces/stories-response-api';

//* styles
import './bookmark-icon.styles.scss';

type BookmarkIconProps = {
	id: number;
	type: 'characters' | 'comics' | 'stories';
	element: SingleComicInterface | CharactersInterface | StoriesInterface;
};

const BookmarkIcon = ({ id, type, element }: BookmarkIconProps) => {
	const { state, dispatch } = useContext(AppContext);

	const { storeItem } = useLocalStorage<BookmarksAndHiddenRosourcesType>();

	const handleBookMark = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		if (
			state.bookmarks[type as keyof BookmarksAndHiddenRosourcesType]
				.map((pieceOfData) => pieceOfData.id === id)
				.includes(true)
		) {
			dispatch({
				type: 'REMOVE_BOOKMARK',
				payload: {
					element,
					resource: type,
				},
			});
		} else {
			dispatch({
				type: 'ADD_BOOKMARK',
				payload: {
					element,
					resource: type,
				},
			});
		}
	};

	useEffect(() => {
		storeItem('bookmarks', state.bookmarks);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.bookmarks]);

	return (
		<div className='bookmarkIconContainer' id={`${id}`}>
			<button
				id={`${id}`}
				className={
					state.bookmarks[
						type as keyof BookmarksAndHiddenRosourcesType
					]
						.map((pieceOfData) => pieceOfData.id === id)
						.includes(true)
						? 'bookmarkIconContainer__button-liked'
						: 'bookmarkIconContainer__button'
				}
				onClick={(e) => {
					handleBookMark(e);
				}}
			>
				❤️
			</button>
		</div>
	);
};

export default BookmarkIcon;
