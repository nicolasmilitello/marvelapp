import React, { createContext, ReactNode, useEffect, useReducer } from 'react';

//* constants
import { endpoint } from '../constants/endpoint';
import apiKey from '../constants/api-key';

//* custom hooks
import useFetch from '../hooks/useFetch';
import { useLocalStorage } from '../hooks/useLocalStorage';

//* interfaces
import {
	CharactersInterface,
	CharactersResponse,
} from '../interfaces/characters-response-api';
import {
	ComicsInterface,
	ComicsResponse,
} from '../interfaces/comics-response-api';
import { SelectOptionsType } from '../interfaces/select-options-type';
import { SingleComicInterface } from '../interfaces/single-comic-response-api';
import {
	StoriesInterface,
	StoriesResponse,
} from '../interfaces/stories-response-api';

//* reducer
import { ActionType, marvelReducer } from '../reducer/reducer';

export type BookmarksAndHiddenRosourcesType = {
	characters: CharactersInterface[];
	comics: ComicsInterface[];
	stories: StoriesInterface[];
};

export type InitialStateInterface = {
	characters: CharactersInterface[];
	comics: ComicsInterface[] | SingleComicInterface[];
	stories: StoriesInterface[];
	charactersOptions: SelectOptionsType[];
	comicsOptions: SelectOptionsType[];
	storiesOptions: SelectOptionsType[];
	bookmarks: BookmarksAndHiddenRosourcesType;
	hiddenResources: BookmarksAndHiddenRosourcesType;
};

export const initialState: InitialStateInterface = {
	characters: [],
	comics: [],
	stories: [],
	charactersOptions: [],
	comicsOptions: [],
	storiesOptions: [],
	bookmarks: {
		characters: [],
		comics: [],
		stories: [],
	},
	hiddenResources: {
		characters: [],
		comics: [],
		stories: [],
	},
};

export const AppContext = createContext<{
	state: InitialStateInterface;
	dispatch: (action: ActionType) => void;
}>({ state: initialState, dispatch: () => {} });

type AppProviderPropsType = {
	children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderPropsType) => {
	const [state, dispatch] = useReducer(marvelReducer, initialState);

	const { getItem } = useLocalStorage<BookmarksAndHiddenRosourcesType>();

	const bookmarksStored = getItem('bookmarks');

	const hiddenResourcesStored = getItem('hiddenResources');

	const { data: charactersData } = useFetch<CharactersResponse>(
		`${endpoint}/characters?${apiKey}&limit=20`
	);

	const { data: comicsData } = useFetch<ComicsResponse>(
		`${endpoint}/comics?${apiKey}&limit=20&offset=2`
	);

	const { data: storiesData } = useFetch<StoriesResponse>(
		`${endpoint}/stories?${apiKey}&limit=20&offset=15269`
	);

	useEffect(() => {
		if (bookmarksStored) {
			dispatch({
				type: 'SET_BOOKMARKS',
				payload: bookmarksStored,
			});
		}

		if (hiddenResourcesStored) {
			dispatch({
				type: 'SET_HIDDEN_RESOURCES',
				payload: hiddenResourcesStored,
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (charactersData) {
			const characterOptions = charactersData.data.results.map(
				(option) => {
					return { title: option.name, id: option.id };
				}
			);

			dispatch({
				type: 'SET_CHARACTERS_OPTIONS',
				payload: characterOptions,
			});
		}

		if (comicsData) {
			const comicsOptions = comicsData.data.results.map((option) => {
				return { title: option.title, id: option.id };
			});

			dispatch({
				type: 'SET_COMICS_OPTIONS',
				payload: comicsOptions,
			});
		}

		if (storiesData) {
			const storiesOptions = storiesData.data.results.map((option) => {
				return { title: option.title, id: option.id };
			});

			dispatch({
				type: 'SET_STORIES_OPTIONS',
				payload: storiesOptions,
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [charactersData, comicsData, storiesData]);

	return (
		<AppContext.Provider value={{ state, dispatch }}>
			{children}
		</AppContext.Provider>
	);
};
