import React, { useContext } from 'react';

//* context
import { AppContext } from '../../context/context';

//* interfaces
import { CharactersInterface } from '../../interfaces/characters-response-api';
import { SingleComicInterface } from '../../interfaces/single-comic-response-api';

//* styles
import './cover-picture.styles.scss';

type DetailsPagePropsType = {
	type: 'characters' | 'comics';
};

const CoverPicture = ({ type }: DetailsPagePropsType) => {
	const { state } = useContext(AppContext);

	return (
		<div className='coverPictureContainer'>
			<div className='detailsPageContainer__images'>
				{state[type as 'characters' | 'comics']?.length ? (
					<img
						src={`${
							(
								state[type as 'characters' | 'comics'][0] as
									| SingleComicInterface
									| CharactersInterface
							).thumbnail.path
						}.${
							(
								state[type as 'characters' | 'comics'][0] as
									| SingleComicInterface
									| CharactersInterface
							).thumbnail.extension
						}`}
						alt={
							type === 'comics'
								? (
										state[
											type as 'comics'
										][0] as SingleComicInterface
								  ).title
								: (
										state[
											type as 'characters'
										][0] as CharactersInterface
								  ).name
						}
					/>
				) : null}
			</div>
		</div>
	);
};

export default CoverPicture;
