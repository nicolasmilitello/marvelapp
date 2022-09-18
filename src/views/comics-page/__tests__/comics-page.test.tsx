import React, { useReducer } from 'react';
import { waitFor, renderHook, screen } from '@testing-library/react';
import { AppContext, InitialStateInterface } from '../../../context/context';
import { marvelReducer } from '../../../reducer/reducer';

//* components
import ComicsPage from '../comics-page';

//* constants
import { formatSelectOptions } from '../../../constants/format-select-options';

//* mocks
import { comicsMock } from '../../../mocks/comics-mock';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<ComicsPage />', () => {
	it('should render <Card /> components', async () => {
		const mockState: InitialStateInterface = {
			characters: [],
			comics: comicsMock.data.results,
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
				<ComicsPage />
			</AppContext.Provider>
		);

		await waitFor(
			async () => {
				expect(await screen.findAllByRole('link')).toHaveLength(12);
			},
			{
				timeout: 3000,
			}
		);

		expect(
			screen.getByText(/Startling Stories: The Incorrigible Hulk/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/ULTIMATE X-MEN VOL. 5: ULTIMATE/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/Marvel Age Spider-Man Vol. 2: Everyday Hero/i)
		).toBeInTheDocument();
	});

	it('should render filters components', async () => {
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
				<ComicsPage />
			</AppContext.Provider>
		);

		const searchFilter = screen.getByPlaceholderText(/search by title/i);
		const storyFilter = screen.getByPlaceholderText(/filter by format/i);

		expect(searchFilter).toBeInTheDocument();
		expect(storyFilter).toBeInTheDocument();

		let options = screen.getAllByTestId('select-option');
		expect(options).toHaveLength(formatSelectOptions.length);
	});

	it('should render a loading image', async () => {
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
				<ComicsPage />
			</AppContext.Provider>
		);

		await waitFor(() => {
			expect(screen.getByTestId('loading-component')).toBeInTheDocument();
		});
	});

	it('should render the pagination component', async () => {
		const mockState: InitialStateInterface = {
			characters: [],
			comics: comicsMock.data.results,
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
				<ComicsPage />
			</AppContext.Provider>
		);

		await waitFor(() => {
			expect(
				screen.getByTestId('pagination-component')
			).toBeInTheDocument();
		});
	});
});
