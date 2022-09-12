import React, { useContext, useEffect } from 'react';

//* context
import {
	AppContext,
	BookmarksAndHiddenRosourcesType,
} from '../../context/context';

//* custom hooks
import { useLocalStorage } from '../../hooks/useLocalStorage';

//* interfaces
import { CharactersInterface } from '../../interfaces/characters-response-api';
import { SingleComicInterface } from '../../interfaces/single-comic-response-api';
import { StoriesInterface } from '../../interfaces/stories-response-api';

//* styles
import './hide-resource-icon.styles.scss';

type HideResourceIconProps = {
	id: number;
	type: string;
	element: SingleComicInterface | CharactersInterface | StoriesInterface;
};

const HideResourceIcon = ({ id, type, element }: HideResourceIconProps) => {
	const { state, dispatch } = useContext(AppContext);

	const { storeItem } = useLocalStorage<BookmarksAndHiddenRosourcesType>();

	const handleResource = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();

		if (
			state.hiddenResources[type as keyof BookmarksAndHiddenRosourcesType]
				.map((pieceOfData) => pieceOfData.id === id)
				.includes(true)
		) {
			dispatch({
				type: 'SHOW_RESOURCE',
				payload: {
					element,
					resource: type,
				},
			});
		} else {
			dispatch({
				type: 'HIDE_RESOURCE',
				payload: {
					element,
					resource: type,
				},
			});
		}
	};

	useEffect(() => {
		storeItem('hiddenResources', state.hiddenResources);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [state.hiddenResources]);

	return (
		<div className='hideResourceIconContainer' id={`${id}`}>
			<button
				id={`${id}`}
				className={
					state.hiddenResources[
						type as keyof BookmarksAndHiddenRosourcesType
					]
						.map((pieceOfData) => pieceOfData.id === id)
						.includes(true)
						? 'hiddenResourcesIconContainer__button-hidden'
						: 'hiddenResourcesIconContainer__button'
				}
				onClick={(e) => {
					handleResource(e);
				}}
			>
				<div>🚫</div>
			</button>
		</div>
	);
};

export default HideResourceIcon;
