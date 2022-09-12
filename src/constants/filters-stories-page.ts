import FilterParamsType from '../interfaces/filter-params-type';

export const filtersStoriesPage: FilterParamsType = {
	search: {
		value: '',
		query_param: 'nameStartsWith',
	},
	pagination: {
		value: 0,
		query_param: 'offset',
	},
	character: {
		value: '',
		query_param: 'characters',
	},
};
