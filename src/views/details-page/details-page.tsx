import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//* components
import {
	BookmarkIcon,
	Collection,
	CoverPicture,
	DetailsHeader,
	ExtraImages,
	Footer,
	Loading,
} from '../../components/index';

//* constants
import { endpoint } from '../../constants/endpoint';
import apiKey from '../../constants/api-key';

//* context
import { AppContext } from '../../context/context';

//* custom hooks
import useFetch from '../../hooks/useFetch';

//* interfaces
import { CharactersResponse } from '../../interfaces/characters-response-api';
import { ComicsResponse } from '../../interfaces/comics-response-api';
import { ComicSingleResponse } from '../../interfaces/single-comic-response-api';
import { StoriesResponse } from '../../interfaces/stories-response-api';

//* styles
import './details-page.styles.scss';

type DetailsPagePropsType = {
	type: 'characters' | 'comics' | 'stories';
};

const DetailsPage = ({ type }: DetailsPagePropsType) => {
	const { state, dispatch } = useContext(AppContext);

	const { id } = useParams();

	const { data, error, loading } = useFetch<
		StoriesResponse | CharactersResponse | ComicSingleResponse
	>(`${endpoint}/${type}/${id}?${apiKey}`);

	useEffect(() => {
		if (data) {
			switch (type) {
				case 'stories':
					dispatch({
						type: 'SET_STORIES',
						payload: (data as StoriesResponse).data?.results,
					});
					break;
				case 'characters':
					dispatch({
						type: 'SET_CHARACTERS',
						payload: (data as CharactersResponse).data?.results,
					});
					break;
				case 'comics':
					dispatch({
						type: 'SET_COMICS',
						payload: (data as ComicSingleResponse).data?.results,
					});
					break;
			}
		}

		async function getFields() {
			if (type !== 'characters') {
				try {
					const response = await fetch(
						`${endpoint}/${type}/${id}/characters?${apiKey}`
					);

					if (response.ok) {
						const characters: CharactersResponse =
							await response.json();
						dispatch({
							type: 'SET_CHARACTERS',
							payload: characters.data?.results,
						});
					} else {
						console.error(
							`Error ${response.status}: ${response.statusText}`
						);
					}
				} catch (error) {
					console.log(error);
				}
			}

			if (type !== 'comics') {
				try {
					const response = await fetch(
						`${endpoint}/${type}/${id}/comics?${apiKey}`
					);

					if (response.ok) {
						const comics: ComicsResponse = await response.json();
						dispatch({
							type: 'SET_COMICS',
							payload: comics.data?.results,
						});
					} else {
						console.error(
							`Error ${response.status}: ${response.statusText}`
						);
					}
				} catch (error) {
					console.log(error);
				}
			}

			if (type !== 'stories') {
				try {
					const response = await fetch(
						`${endpoint}/${type}/${id}/stories?${apiKey}`
					);

					if (response.ok) {
						const stories: StoriesResponse = await response.json();
						dispatch({
							type: 'SET_STORIES',
							payload: stories.data?.results,
						});
					} else {
						console.error(
							`Error ${response.status}: ${response.statusText}`
						);
					}
				} catch (error) {
					console.log(error);
				}
			}
		}

		getFields();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	return (
		<div className='detailsPageContainer'>
			{loading && <Loading />}

			{error && (
				<p className='detailsPageContainer__error'>{`Sorry, an error ocurred. ${error.status}: ${error.message}`}</p>
			)}

			{!error && id && (
				<div className='detailsPageContainer__detailsContainer'>
					{type !== 'stories' && <CoverPicture type={type} />}

					<DetailsHeader type={type} />

					<div className='detailsPageContainer__detailsContainer__bookmarkIconContainer'>
						<BookmarkIcon
							id={parseInt(id)}
							type={type}
							element={state[type][0]}
						/>
					</div>

					<div>
						{type === 'comics' && <ExtraImages />}

						{type !== 'characters' && (
							<Collection
								loading={loading}
								typeOfContent='characters'
							/>
						)}

						{type !== 'comics' && (
							<Collection
								loading={loading}
								typeOfContent='comics'
							/>
						)}

						{type !== 'stories' && (
							<Collection
								loading={loading}
								typeOfContent='stories'
							/>
						)}
					</div>
				</div>
			)}

			<Footer />
		</div>
	);
};

export default DetailsPage;
