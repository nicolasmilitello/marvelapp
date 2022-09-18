import React from 'react';

//* images
import loadingImage from '../../assets/loading-cap.png';

//* styles
import './loading.styles.scss';

const Loading = () => {
	return (
		<div className='loadingContainer' data-testid='loading-component'>
			<img src={loadingImage} alt='Loading' />
		</div>
	);
};

export default Loading;
