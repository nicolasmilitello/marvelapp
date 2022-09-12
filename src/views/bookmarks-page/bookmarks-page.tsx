import React from 'react';

//* components
import {
	BookmarkAndHiddenResourcesCollection,
	Footer,
	RestartButton,
} from '../../components';

const BookmarksPage = () => {
	return (
		<div className='bookmarksPageContainer'>
			<RestartButton type={'bookmarks'} />

			<BookmarkAndHiddenResourcesCollection
				kindOfResults='bookmarks'
				typeOfContent='characters'
			/>

			<BookmarkAndHiddenResourcesCollection
				kindOfResults='bookmarks'
				typeOfContent='comics'
			/>

			<BookmarkAndHiddenResourcesCollection
				kindOfResults='bookmarks'
				typeOfContent='stories'
			/>

			<Footer />
		</div>
	);
};

export default BookmarksPage;
