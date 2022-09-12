type FilterParamsType = {
	search: {
		value: string;
		query_param: string;
	};
	pagination: {
		value: number;
		query_param: string;
	};
	comic?: {
		value: number;
		query_param: string;
	};
	story?: {
		value: number;
		query_param: string;
	};
	character?: {
		value: string;
		query_param: string;
	};
	format?: {
		value:
			| 'comic'
			| 'magazine'
			| 'trade paperback'
			| 'hardcover'
			| 'digest'
			| 'graphic novel'
			| 'digital comic'
			| 'infinite comic'
			| '';
		query_param: string;
	};
};

export default FilterParamsType;
