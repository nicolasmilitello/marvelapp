import React, { useContext } from 'react';

//* components
import { Card, StoryCard } from '../index';

//* context
import { AppContext } from '../../context/context';

//* interfaces
import { StoriesInterface } from '../../interfaces/stories-response-api';
import { CharactersInterface } from '../../interfaces/characters-response-api';
import { SingleComicInterface } from '../../interfaces/single-comic-response-api';

//* styles
import './bookmark-and-hidden-resources-collection.styles.scss';

type BookmarkAndHiddenResourcesCollectionPropsType = {
	kindOfResults: 'bookmarks' | 'hiddenResources';
	typeOfContent: 'characters' | 'comics' | 'stories';
};

const BookmarkAndHiddenResourcesCollection = ({
	kindOfResults,
	typeOfContent,
}: BookmarkAndHiddenResourcesCollectionPropsType) => {
	const { state } = useContext(AppContext);

	return (
		<div className='bookmarkAndHiddenResourcesCollectionContainer'>
			<h2 className='bookmarkAndHiddenResourcesCollection__title'>
				{typeOfContent.toUpperCase()}
			</h2>

			{state[kindOfResults][typeOfContent].length ? null : (
				<p className='bookmarkAndHiddenResourcesCollection__cardsContainer__noResults'>{`No ${typeOfContent} found.`}</p>
			)}

			<div className='bookmarkAndHiddenResourcesCollection__cardsContainer'>
				{state[kindOfResults][
					typeOfContent as 'characters' | 'comics' | 'stories'
				].length
					? state[kindOfResults][
							typeOfContent as 'characters' | 'comics' | 'stories'
					  ]?.map((pieceOfData) =>
							typeOfContent !== 'stories' ? (
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
											? (
													pieceOfData as SingleComicInterface
											  )?.title
											: (
													pieceOfData as CharactersInterface
											  )?.name
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
									name={
										(pieceOfData as StoriesInterface)?.title
									}
									type={typeOfContent}
									element={pieceOfData as StoriesInterface}
								/>
							)
					  )
					: null}
			</div>
		</div>
	);
};

export default BookmarkAndHiddenResourcesCollection;
