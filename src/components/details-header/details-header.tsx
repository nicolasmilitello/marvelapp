import React, { useContext } from 'react';

//* context
import { AppContext } from '../../context/context';

//* styles
import './details-header.styles.scss';

type DetailsHeaderPropsType = {
	type: 'characters' | 'comics' | 'stories';
};

const DetailsHeader = ({ type }: DetailsHeaderPropsType) => {
	const { state } = useContext(AppContext);

	return (
		<div className='detailsHeaderContainer'>
			{state[type]?.length ? (
				<div>
					{type === 'comics' && (
						<p className='detailsHeaderContainer__format'>
							{state.comics[0]?.format} format
						</p>
					)}
					<h3 className='detailsHeaderContainer__title'>
						{type !== 'characters'
							? state[type][0]?.title
							: state[type][0]?.name}
					</h3>
					<p className='detailsHeaderContainer__description'>
						{state[type][0]?.description
							? state[type][0]?.description
							: 'No description available.'}
					</p>
				</div>
			) : null}
		</div>
	);
};

export default DetailsHeader;
