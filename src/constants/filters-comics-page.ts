import FilterParamsType from '../interfaces/filter-params-type';

export const filtersComicsPage: FilterParamsType = {
	search: {
		value: '',
		query_param: 'titleStartsWith',
	},
	pagination: {
		value: 0,
		query_param: 'offset',
	},
	format: {
		value: '',
		query_param: 'format',
	},
};
