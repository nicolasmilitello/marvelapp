import FilterParamsType from '../interfaces/filter-params-type';

export const filtersCharactersPage: FilterParamsType = {
	search: {
		value: '',
		query_param: 'nameStartsWith',
	},
	pagination: {
		value: 0,
		query_param: 'offset',
	},
	comic: {
		value: 0,
		query_param: 'comics',
	},
	story: {
		value: 0,
		query_param: 'stories',
	},
};
