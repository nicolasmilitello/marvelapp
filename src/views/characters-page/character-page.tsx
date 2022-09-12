import React, { useContext, useEffect, useState } from 'react';

//* components
import {
	Collection,
	Footer,
	Loading,
	Pagination,
	SearchBar,
	SelectFilter,
} from '../../components/index';

//* constants
import { endpoint } from '../../constants/endpoint';
import apiKey from '../../constants/api-key';
import resourcesPerPage from '../../constants/number-resources-per-page';
import { filtersCharactersPage } from '../../constants/filters-characters-page';

//* context
import { AppContext } from '../../context/context';

//* custom hooks
import useFetch from '../../hooks/useFetch';

//* interfaces
import { CharactersResponse } from '../../interfaces/characters-response-api';
import FilterParamsType from '../../interfaces/filter-params-type';

//* styles
import './character-page.styles.scss';

//* utils
import generateEndpoint from '../../utils/generate-endpoint';

const CharacterPage = () => {
	const { state, dispatch } = useContext(AppContext);

	// pagination
	const [currentPage, setCurrentPage] = useState(1);

	const [generatedEndpoint, setGeneratedEndpoint] = useState<string>(
		`${endpoint}/characters?${apiKey}&limit=${resourcesPerPage}`
	);

	const [charactersFilterParams, setCharactersFilterParams] =
		useState<FilterParamsType>(filtersCharactersPage);

	const { data, error, loading } =
		useFetch<CharactersResponse>(generatedEndpoint);

	useEffect(() => {
		setGeneratedEndpoint(
			generateEndpoint(charactersFilterParams, 'characters')
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		charactersFilterParams.search.value,
		charactersFilterParams.pagination.value,
		charactersFilterParams.comic?.value,
		charactersFilterParams.story?.value,
	]);

	useEffect(() => {
		if (data) {
			dispatch({ type: 'SET_CHARACTERS', payload: data.data?.results });
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<div className='characterPageContainer'>
			<div className='characterPageContainer__filterContainer'>
				<SelectFilter
					setCurrentPage={setCurrentPage}
					params={charactersFilterParams}
					handleParams={setCharactersFilterParams}
					options={state.comicsOptions}
					title='Filter by comic'
					type='comic'
				/>

				<SelectFilter
					setCurrentPage={setCurrentPage}
					params={charactersFilterParams}
					handleParams={setCharactersFilterParams}
					options={state.storiesOptions}
					title='Filter by story'
					type='story'
				/>

				<SearchBar
					setCurrentPage={setCurrentPage}
					params={charactersFilterParams}
					handleParams={setCharactersFilterParams}
					placeholder='Search by character name'
				/>
			</div>

			{loading && <Loading />}

			{error && (
				<p className='charactersPageContainer__error'>{`Sorry, an error ocurred. ${error.status}: ${error.message}`}</p>
			)}

			{!loading && !error && (
				<Collection loading={loading} typeOfContent='characters' />
			)}

			{state.characters?.length ? (
				<Pagination
					params={charactersFilterParams}
					handleParams={setCharactersFilterParams}
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

export default CharacterPage;
