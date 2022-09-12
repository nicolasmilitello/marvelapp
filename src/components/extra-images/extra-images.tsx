import React, { useContext } from 'react';

//* context
import { AppContext } from '../../context/context';

//* styles
import './extra-images.styles.scss';

const ExtraImages = () => {
	const { state } = useContext(AppContext);

	return (
		<div className='extraImagesContainer'>
			{state.comics?.length ? (
				<div>
					<p className='extraImagesContainer__title'>Images:</p>

					{state.comics[0].images.length ? null : (
						<p className='extraImagesContainer__results'>
							No images found.
						</p>
					)}

					<div className='extraImagesContainer__extraImages'>
						{state.comics[0].images?.map((image) => (
							<img
								key={image.path}
								src={`${image.path}.${image.extension}`}
								alt={state.comics[0].title}
							/>
						))}
					</div>
				</div>
			) : null}
		</div>
	);
};

export default ExtraImages;
