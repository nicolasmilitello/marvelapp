import React, { useContext, useEffect, useState } from 'react';

//* components
import {
	Collection,
	Footer,
	Loading,
	Pagination,
	SearchBar,
	Select,
} from '../../components/index';

//* constants
import { endpoint } from '../../constants/endpoint';
import apiKey from '../../constants/api-key';
import resourcesPerPage from '../../constants/number-resources-per-page';
import { filtersComicsPage } from '../../constants/filters-comics-page';
import { formatSelectOptions } from '../../constants/format-select-options';

//* context
import { AppContext } from '../../context/context';

//* custom hooks
import useFetch from '../../hooks/useFetch';

//* interfaces
import { ComicsResponse } from '../../interfaces/comics-response-api';
import FilterParamsType from '../../interfaces/filter-params-type';

//* styles
import './comics-page.styles.scss';

//* utils
import generateEndpoint from '../../utils/generate-endpoint';

const ComicsPage = () => {
	const { state, dispatch } = useContext(AppContext);

	// pagination
	const [currentPage, setCurrentPage] = useState(1);

	const [generatedEndpoint, setGeneratedEndpoint] = useState<string>(
		`${endpoint}/comics?${apiKey}&limit=${resourcesPerPage}`
	);

	const [comicsFilterParams, setComicsFilterParams] =
		useState<FilterParamsType>(filtersComicsPage);

	const { data, error, loading } =
		useFetch<ComicsResponse>(generatedEndpoint);

	useEffect(() => {
		setGeneratedEndpoint(generateEndpoint(comicsFilterParams, 'comics'));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		comicsFilterParams.search.value,
		comicsFilterParams.pagination.value,
		comicsFilterParams.format?.value,
	]);

	useEffect(() => {
		if (data) {
			dispatch({ type: 'SET_COMICS', payload: data.data?.results });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<div className='comicsPageContainer'>
			<div className='comicsPageContainer__filterContainer'>
				<SearchBar
					setCurrentPage={setCurrentPage}
					params={comicsFilterParams}
					handleParams={setComicsFilterParams}
					placeholder='Search by title'
				/>

				<Select
					setCurrentPage={setCurrentPage}
					params={comicsFilterParams}
					handleParams={setComicsFilterParams}
					placeholder='Filter by format'
					options={formatSelectOptions}
				/>
			</div>

			{loading && <Loading />}

			{error && (
				<p className='comicsPageContainer__error'>{`Sorry, an error ocurred. ${error.status}: ${error.message}`}</p>
			)}

			{!loading && !error && (
				<Collection loading={loading} typeOfContent='comics' />
			)}

			{state.comics?.length ? (
				<Pagination
					params={comicsFilterParams}
					handleParams={setComicsFilterParams}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					cardsPerPage={resourcesPerPage}
					totalCards={data?.data.total}
				/>
			) : null}

			<Footer />
		</div>
	);
};

export default ComicsPage;
