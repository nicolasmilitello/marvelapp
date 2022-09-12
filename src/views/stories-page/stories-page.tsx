import React, { useContext, useEffect, useState } from 'react';

//* components
import {
	Collection,
	Footer,
	Loading,
	Pagination,
	SelectFilter,
} from '../../components/index';

//* constants
import { endpoint } from '../../constants/endpoint';
import apiKey from '../../constants/api-key';
import resourcesPerPage from '../../constants/number-resources-per-page';
import { filtersStoriesPage } from '../../constants/filters-stories-page';

//* context
import { AppContext } from '../../context/context';

//* custom hooks
import useFetch from '../../hooks/useFetch';

//* interfaces
import { StoriesResponse } from '../../interfaces/stories-response-api';
import FilterParamsType from '../../interfaces/filter-params-type';

//* styles
import './stories-page.styles.scss';

//* utils
import generateEndpoint from '../../utils/generate-endpoint';

const StoriesPage = () => {
	const { state, dispatch } = useContext(AppContext);

	// pagination
	const [currentPage, setCurrentPage] = useState(1);

	const [generatedEndpoint, setGeneratedEndpoint] = useState<string>(
		`${endpoint}/stories?${apiKey}&limit=${resourcesPerPage}`
	);

	const [storiesFilterParams, setStoriesFilterParams] =
		useState<FilterParamsType>(filtersStoriesPage);

	const { data, error, loading } =
		useFetch<StoriesResponse>(generatedEndpoint);

	useEffect(() => {
		setGeneratedEndpoint(generateEndpoint(storiesFilterParams, 'stories'));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		storiesFilterParams.search.value,
		storiesFilterParams.pagination.value,
		storiesFilterParams.character?.value,
	]);

	useEffect(() => {
		if (data) {
			dispatch({ type: 'SET_STORIES', payload: data.data.results });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<div className='storiesPageContainer'>
			<div className='storiesPageContainer__filterContainer'>
				<SelectFilter
					setCurrentPage={setCurrentPage}
					params={storiesFilterParams}
					handleParams={setStoriesFilterParams}
					options={state.charactersOptions}
					title='Filter by character'
					type='character'
				/>
			</div>

			{loading && <Loading />}

			{error && (
				<p className='storiesPageContainer__error'>{`Sorry, an error ocurred. ${error.status}: ${error.message}`}</p>
			)}

			{!loading && !error && (
				<Collection loading={loading} typeOfContent='stories' />
			)}

			{state.stories?.length ? (
				<Pagination
					params={storiesFilterParams}
					handleParams={setStoriesFilterParams}
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

export default StoriesPage;
