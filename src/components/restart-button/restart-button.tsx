import React, { useContext, useEffect, useState } from 'react';

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

	const [showConfirmation, setShowConfirmation] = useState(false);

	const { storeItem } = useLocalStorage<BookmarksAndHiddenRosourcesType>();

	const handleRestart = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		setShowConfirmation(false);

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

	const checkExistence = () => {
		if (type === 'bookmarks') {
			if (
				state.bookmarks.characters.length ||
				state.bookmarks.comics.length ||
				state.bookmarks.stories.length
			) {
				return true;
			}
		} else if (
			state.hiddenResources.characters.length ||
			state.hiddenResources.comics.length ||
			state.hiddenResources.stories.length
		) {
			return true;
		}

		return false;
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
		<div>
			<div
				className='restartButtonContainer'
				data-testid='restart-button-component'
			>
				<button
					className={
						checkExistence()
							? undefined
							: 'restartButtonContainer__button-disabled'
					}
					onClick={() => {
						checkExistence()
							? setShowConfirmation(true)
							: setShowConfirmation(false);
					}}
				>
					{type === 'bookmarks'
						? 'Remove all bookmarks'
						: 'Show all resources'}
				</button>
			</div>

			{showConfirmation && (
				<div>
					<div className='restartButtonContainer'>
						{`Are you sure you want to ${
							type === 'bookmarks'
								? 'remove all bookmarks?'
								: 'show all the resources?'
						}`}
					</div>
					<div className='restartButtonContainer'>
						<button
							onClick={(e) => {
								handleRestart(e);
							}}
						>
							YES
						</button>
						<button
							onClick={() => {
								setShowConfirmation(false);
							}}
						>
							NO
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default RestartButton;
