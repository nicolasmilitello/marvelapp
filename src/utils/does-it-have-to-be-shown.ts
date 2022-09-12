//* interfaces
import { InitialStateInterface } from '../context/context';

const doesItHaveToBeHidden = (
	state: InitialStateInterface,
	type: 'characters' | 'comics' | 'stories',
	cardId: number
) => {
	return state.hiddenResources[type as 'characters' | 'comics' | 'stories']
		.map((card) => card.id === cardId)
		.includes(true);
};

export default doesItHaveToBeHidden;
