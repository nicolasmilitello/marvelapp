import React, {
	useState,
	useMemo,
	SetStateAction,
	Dispatch,
	useEffect,
} from 'react';

//* components
import { Button } from '../index';

//* constants
import resourcesPerPage from '../../constants/number-resources-per-page';

//* interfaces
import FilterParamsType from '../../interfaces/filter-params-type';

//* styles
import './pagination.styles.scss';
import { pageNumberLimit } from '../../constants/page-number-limit';

type PaginationProps = {
	params: FilterParamsType;
	handleParams: Dispatch<SetStateAction<FilterParamsType>>;
	setCurrentPage: (currentPage: number) => void;
	currentPage: number;
	cardsPerPage: number;
	totalCards: number | undefined;
};

export default function Pagination({
	params,
	handleParams,
	setCurrentPage,
	currentPage,
	cardsPerPage,
	totalCards,
}: PaginationProps) {
	const [maxPageNumberLimit, setMaxPageNumberLimit] = React.useState(3);

	const [minPageNumberLimit, setMinPageNumberLimit] = React.useState(0);

	useEffect(() => {
		if (currentPage === 1) {
			setMinPageNumberLimit(0);
			setMaxPageNumberLimit(3);
		}
	}, [currentPage]);

	let totalNumberPages = useMemo(() => {
		if (totalCards) {
			return Math.ceil(totalCards / cardsPerPage);
		}
	}, [totalCards, cardsPerPage]);

	function getPageNumbers() {
		const array = [];
		if (totalNumberPages) {
			for (let i = 1; i <= totalNumberPages; i++) {
				array.push(i);
			}
		}
		return array;
	}

	let pageNumbers = useMemo(
		() => getPageNumbers(),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[totalCards, cardsPerPage]
	);

	const handleClickNext = () => {
		if (currentPage === totalNumberPages) {
			return;
		}

		setCurrentPage(currentPage + 1);

		handleParams({
			...params,
			pagination: {
				...params.pagination,
				value: (currentPage + 1 - 1) * resourcesPerPage,
			},
		});

		if (currentPage + 1 > maxPageNumberLimit) {
			setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
		}
	};

	const handleClickPrev = () => {
		if (currentPage === 1) {
			return;
		}

		setCurrentPage(currentPage - 1);

		handleParams({
			...params,
			pagination: {
				...params.pagination,
				value: (currentPage - 1 - 1) * resourcesPerPage,
			},
		});

		if ((currentPage - 1) % pageNumberLimit === 0) {
			setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
			setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
		}
	};

	const handleClickPage = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setCurrentPage(Number((e.target as HTMLButtonElement).id));

		handleParams({
			...params,
			pagination: {
				...params.pagination,
				value:
					(Number((e.target as HTMLButtonElement).id) - 1) *
					resourcesPerPage,
			},
		});
	};

	const renderPageNumbers = pageNumbers.map((number) => {
		if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
			return (
				<div key={number}>
					<Button
						content={`${number}`}
						id={`${number}`}
						eventHandler={
							currentPage === number ? null : handleClickPage
						}
						selected={currentPage === number ? true : false}
						disabled={false}
					/>
				</div>
			);
		} else {
			return null;
		}
	});

	return (
		<div className='paginationContainer' data-testid='pagination-component'>
			<Button
				content='<'
				eventHandler={handleClickPrev}
				selected={false}
				disabled={currentPage === 1 ? true : false}
			/>
			{renderPageNumbers}
			<span>... of {pageNumbers[pageNumbers.length - 1]} pages</span>
			<Button
				content='>'
				eventHandler={handleClickNext}
				selected={false}
				disabled={currentPage === totalNumberPages ? true : false}
			/>
		</div>
	);
}
