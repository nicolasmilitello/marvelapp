import React from 'react';

//* image
import notFoundImage from '../../assets/marvel_not_found.png';

//* styles
import './not-found-page.styles.scss';

const NotFoundPage = () => {
	return (
		<div className='notFoundPageContainer' data-testid='notFound-page'>
			<img src={notFoundImage} alt='not_found' />
			<p className='notFoundPageContainer__error'>
				Sorry, this page doesn't exist.
			</p>
		</div>
	);
};

export default NotFoundPage;
