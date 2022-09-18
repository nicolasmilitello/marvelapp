import React from 'react';

//* styles
import './select.styles.scss';

//* types
import { formatSelectOptionsType } from '../../constants/format-select-options';
import FilterParamsType from '../../interfaces/filter-params-type';

type SelectProps = {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	params: FilterParamsType;
	handleParams: (params: FilterParamsType) => void;
	options: formatSelectOptionsType;
	placeholder: string;
};

type formatType =
	| 'comic'
	| 'magazine'
	| 'trade paperback'
	| 'hardcover'
	| 'digest'
	| 'graphic novel'
	| 'digital comic'
	| 'infinite comic'
	| '';

const Select = ({
	setCurrentPage,
	params,
	handleParams,
	options,
	placeholder,
}: SelectProps) => {
	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setCurrentPage(1);

		if (params.format) {
			handleParams({
				...params,
				format: {
					...params.format,
					value: e.target.value as formatType,
				},
				pagination: {
					...params.pagination,
					value: 0,
				},
			});
		}
	};

	return (
		<div className='selectContainer'>
			<select
				placeholder={placeholder}
				className='selectContainer__select'
				name='select'
				defaultValue={'DEFAULT'}
				onChange={(e) => handleSelectChange(e)}
				data-testid='select-element'
			>
				<option value='DEFAULT' disabled>
					{placeholder}
				</option>

				<option value=''>All</option>

				{options.map((option) => (
					<option
						key={`${option.replace(' ', '-')}`}
						id={`${option.replace(' ', '-')}`}
						value={option}
						data-testid='select-option'
					>
						{`${option[0].toUpperCase()}${option.slice(1)}`}
					</option>
				))}
			</select>
		</div>
	);
};

export default Select;
