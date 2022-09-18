import React, { useReducer } from 'react';
import { waitFor, renderHook, screen } from '@testing-library/react';
import { charactersMock } from '../../../mocks/characters-mock';
import CharacterPage from '../character-page';
import { AppContext, InitialStateInterface } from '../../../context/context';
import { marvelReducer } from '../../../reducer/reducer';
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<CharacterPage />', () => {
	it('should render <Card /> components', async () => {
		const mockState: InitialStateInterface = {
			characters: charactersMock.data.results,
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

		const { result } = renderHook(() =>
			useReducer(marvelReducer, mockState)
		);

		insertAWrapper(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<CharacterPage />
			</AppContext.Provider>
		);

		await waitFor(
			async () => {
				expect(await screen.findAllByRole('link')).toHaveLength(12);
			},
			{
				timeout: 2000,
			}
		);

		expect(screen.getByText(/3-D Man/i)).toBeInTheDocument();
		expect(screen.getByText(/Aaron Stack/i)).toBeInTheDocument();
		expect(screen.getByText(/A.I.M./i)).toBeInTheDocument();
	});

	it('should render filters components', async () => {
		const mockState: InitialStateInterface = {
			characters: charactersMock.data.results,
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

		const { result } = renderHook(() =>
			useReducer(marvelReducer, mockState)
		);

		insertAWrapper(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<CharacterPage />
			</AppContext.Provider>
		);

		const searchFilter = screen.getByPlaceholderText(/search by/i);
		const storyFilter = screen.getByPlaceholderText(/filter by story/i);
		const comicFilter = screen.getByPlaceholderText(/filter by comic/i);

		expect(searchFilter).toBeInTheDocument();
		expect(storyFilter).toBeInTheDocument();
		expect(comicFilter).toBeInTheDocument();
	});

	it('should render a <Loading /> component', async () => {
		const mockState: InitialStateInterface = {
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

		const { result } = renderHook(() =>
			useReducer(marvelReducer, mockState)
		);

		insertAWrapper(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<CharacterPage />
			</AppContext.Provider>
		);

		await waitFor(() => {
			expect(screen.getByTestId('loading-component')).toBeInTheDocument();
		});
	});

	it('should render a <Pagination /> component', async () => {
		const mockState: InitialStateInterface = {
			characters: charactersMock.data.results,
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

		const { result } = renderHook(() =>
			useReducer(marvelReducer, mockState)
		);

		insertAWrapper(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<CharacterPage />
			</AppContext.Provider>
		);

		await waitFor(() => {
			expect(
				screen.getByTestId('pagination-component')
			).toBeInTheDocument();
		});
	});

	it('should render a <Footer /> component', async () => {
		const mockState: InitialStateInterface = {
			characters: charactersMock.data.results,
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

		const { result } = renderHook(() =>
			useReducer(marvelReducer, mockState)
		);

		insertAWrapper(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<CharacterPage />
			</AppContext.Provider>
		);

		expect(screen.getByTestId('footer-component')).toBeInTheDocument();
	});
});
