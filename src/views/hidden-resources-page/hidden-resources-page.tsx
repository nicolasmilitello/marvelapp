import React from 'react';

//* components
import {
	BookmarkAndHiddenResourcesCollection,
	Footer,
	RestartButton,
} from '../../components';

const HiddenResourcesPage = () => {
	return (
		<div
			className='hiddenResourcesPageContainer'
			data-testid='hiddenResources-page'
		>
			<RestartButton type={'hiddenResources'} />

			<BookmarkAndHiddenResourcesCollection
				kindOfResults='hiddenResources'
				typeOfContent='characters'
			/>

			<BookmarkAndHiddenResourcesCollection
				kindOfResults='hiddenResources'
				typeOfContent='comics'
			/>

			<BookmarkAndHiddenResourcesCollection
				kindOfResults='hiddenResources'
				typeOfContent='stories'
			/>

			<Footer />
		</div>
	);
};

export default HiddenResourcesPage;
