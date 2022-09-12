import React, { useEffect, useState } from 'react';

//* custom hooks
import useDebounce from '../../hooks/useDebounce';

//* styles
import './search-bar.styles.scss';

//* types
import FilterParamsType from '../../interfaces/filter-params-type';

type SearchBarProps = {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	params: FilterParamsType;
	handleParams: (params: FilterParamsType) => void;
	placeholder: string;
};

const SearchBar = ({
	setCurrentPage,
	params,
	handleParams,
	placeholder,
}: SearchBarProps) => {
	const [value, setValue] = useState('');
	const searchValue = useDebounce(value, 1000);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		setCurrentPage(1);

		handleParams({
			...params,
			search: {
				...params.search,
				value: searchValue,
			},
			pagination: {
				...params.pagination,
				value: 0,
			},
		});

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchValue]);

	return (
		<form className='searchBarContainer'>
			<input
				placeholder={placeholder}
				className='searchBarContainer__input'
				name='searchbar'
				type='text'
				value={value}
				onChange={handleChange}
			></input>
		</form>
	);
};

export default SearchBar;
