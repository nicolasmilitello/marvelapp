import React, { useRef, useState } from 'react';

//* interfaces
import { SelectOptionsType } from '../../interfaces/select-options-type';
import FilterParamsType from '../../interfaces/filter-params-type';

//* styles
import './select-filter.styles.scss';

type SearchBarProps = {
	setCurrentPage: (currentPage: number) => void;
	params: FilterParamsType;
	handleParams: (params: FilterParamsType) => void;
	options: SelectOptionsType[];
	title: string;
	type: string;
};

const SelectFilter = ({
	setCurrentPage,
	params,
	handleParams,
	options,
	title,
	type,
}: SearchBarProps) => {
	const [isFocus, setIsFocus] = useState(false);

	const [isHovered, setIsHovered] = useState(false);

	const inputRef = useRef<HTMLInputElement>(null);

	const [inputValue, setInputValue] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement> | '') => {
		if (typeof e === 'string' || !e.target.value) {
			setIsFocus(false);

			setCurrentPage(1);

			inputRef.current?.blur();

			handleParams({
				...params,
				[type]: {
					...params[type as keyof FilterParamsType],
					value: 0,
				},
				pagination: {
					...params.pagination,
					value: 0,
				},
			});
		}

		setInputValue(e && e.target.value);
	};

	const handleOptionClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
		title: string
	) => {
		const id = (e.target as HTMLDivElement).id;

		setIsFocus(false);

		setInputValue(title);

		setCurrentPage(1);

		handleParams({
			...params,
			[type]: {
				...params[type as keyof FilterParamsType],
				value: id,
			},
			pagination: {
				...params.pagination,
				value: 0,
			},
		});
	};

	const cleanInputValue = () => {
		setInputValue('');
		handleChange('');
	};

	return (
		<div className='selectFilterContainer'>
			<div className='selectFilterContainer__inputContainer'>
				<input
					className='selectFilterContainer__inputContainer__input'
					placeholder={title}
					onFocus={() => setIsFocus(true)}
					onBlur={() => {
						if (!isHovered) {
							setIsFocus(false);
						}
					}}
					value={inputValue}
					onChange={(e) => {
						handleChange(e);
					}}
					ref={inputRef}
				/>

				{inputValue && <button onClick={cleanInputValue}>x</button>}

				{isFocus && (
					<div
						className='selectFilterContainer__inputContainer__optionsMenu'
						onMouseEnter={() => {
							setIsHovered(true);
						}}
						onMouseLeave={() => {
							setIsHovered(false);
						}}
					>
						{options.map((option, index) => {
							const isMatch = option.title
								.toLowerCase()
								.includes(inputValue.toLowerCase());
							return (
								<div key={index}>
									{isMatch && (
										<div
											className='selectFilterContainer__inputContainer__optionsMenu__option'
											id={`${option.id}`}
											onClick={(e) => {
												handleOptionClick(
													e,
													option.title
												);
											}}
										>
											{option.title}
										</div>
									)}
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default SelectFilter;
