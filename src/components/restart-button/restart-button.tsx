import React, { useContext, useEffect } from 'react';

//* context
import {
	AppContext,
	BookmarksAndHiddenRosourcesType,
} from '../../context/context';

//* custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';

//* styles
import './restart-button.styles.scss';

type RestartButtonPropsType = {
	type: string;
};

const RestartButton = ({ type }: RestartButtonPropsType) => {
	const { state, dispatch } = useContext(AppContext);

	const { storeItem } = useLocalStorage<BookmarksAndHiddenRosourcesType>();

	const handleRestart = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		if (type === 'bookmarks') {
			if (
				state.bookmarks.characters.length ||
				state.bookmarks.comics.length ||
				state.bookmarks.stories.length
			) {
				dispatch({
					type: 'REMOVE_ALL_BOOKMARKS',
				});
			}
		} else {
			if (
				state.hiddenResources.characters.length ||
				state.hiddenResources.comics.length ||
				state.hiddenResources.stories.length
			) {
				dispatch({
					type: 'SHOW_ALL_RESOURCES',
				});
			}
		}
	};

	useEffect(() => {
		storeItem('bookmarks', state.bookmarks);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.bookmarks]);

	useEffect(() => {
		storeItem('hiddenResources', state.hiddenResources);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.hiddenResources]);

	return (
		<div className='restartButtonContainer'>
			<button
				onClick={(e) => {
					handleRestart(e);
				}}
			>
				{type === 'bookmarks'
					? 'Remove all bookmarks'
					: 'Show all resources'}
			</button>
		</div>
	);
};

export default RestartButton;
