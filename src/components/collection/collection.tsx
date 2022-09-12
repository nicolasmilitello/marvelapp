import React, { useContext } from 'react';

//* components
import { Card, StoryCard } from '../../components/index';

//* context
import { AppContext } from '../../context/context';

//* interfaces
import { StoriesInterface } from '../../interfaces/stories-response-api';
import { CharactersInterface } from '../../interfaces/characters-response-api';
import { SingleComicInterface } from '../../interfaces/single-comic-response-api';

//* styles
import './collection.styles.scss';

//* utils
import doesItHaveToBeHidden from '../../utils/does-it-have-to-be-shown';

type CollectionPropsType = {
	loading: boolean | undefined;
	typeOfContent: 'characters' | 'comics' | 'stories';
};

const Collection = ({ loading, typeOfContent }: CollectionPropsType) => {
	const { state } = useContext(AppContext);

	return (
		<div className='collectionContainer'>
			<h2 className='collectionContainer__title'>
				{typeOfContent.toUpperCase()}
			</h2>

			{state[typeOfContent as 'characters' | 'comics' | 'stories']
				?.length ? null : !loading ? (
				<p className='collectionContainer__results'>{`No ${typeOfContent} found.`}</p>
			) : null}

			<div className='collectionContainer__cardsContainer'>
				{state[
					typeOfContent as 'characters' | 'comics' | 'stories'
				]?.map((pieceOfData) =>
					doesItHaveToBeHidden(
						state,
						typeOfContent as 'characters' | 'comics' | 'stories',
						pieceOfData.id
					) ? null : typeOfContent !== 'stories' ? (
						<Card
							key={pieceOfData.id}
							id={pieceOfData.id}
							imgUrl={`${
								(
									pieceOfData as
										| SingleComicInterface
										| CharactersInterface
								)?.thumbnail.path
							}.${
								(
									pieceOfData as
										| SingleComicInterface
										| CharactersInterface
								)?.thumbnail.extension
							}`}
							name={
								typeOfContent === 'comics'
									? (pieceOfData as SingleComicInterface)
											?.title
									: (pieceOfData as CharactersInterface)?.name
							}
							type={typeOfContent}
							element={
								pieceOfData as
									| SingleComicInterface
									| CharactersInterface
							}
						/>
					) : (
						<StoryCard
							key={pieceOfData.id}
							id={pieceOfData.id}
							name={(pieceOfData as StoriesInterface)?.title}
							type={typeOfContent}
							element={pieceOfData as StoriesInterface}
						/>
					)
				)}
			</div>
		</div>
	);
};

export default Collection;
