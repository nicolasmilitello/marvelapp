import { act, screen } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import StoriesPage from '../stories-page';

//* mocks
import { mockstories } from '../../../mocks/mock-stories';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({ data: mockstories, error: undefined, loading: false }),
}));

describe('<StoriesPage />', () => {
	const renderComponent = async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<StoriesPage />
				</AppProvider>
			);
		});
	};

	it('should render <Card /> components', async () => {
		await renderComponent();

		expect(await screen.findAllByRole('link')).toHaveLength(12);
		expect(
			screen.getByText(/war is under way for control of/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/the world watched as firefighters/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/Ordinary New York City cop Frankie/i)
		).toBeInTheDocument();
	});

	it('should render filter components', async () => {
		await renderComponent();

		const storyFilter = screen.getByPlaceholderText(/filter by character/i);

		expect(storyFilter).toBeInTheDocument();
	});

	it('should render a <Pagination /> component', async () => {
		await renderComponent();

		expect(screen.getByTestId('pagination-component')).toBeInTheDocument();
	});

	it('should render a <Footer /> component', async () => {
		await renderComponent();

		expect(screen.getByTestId('footer-component')).toBeInTheDocument();
	});
});
// import React, { useReducer } from 'react';
// import { waitFor, renderHook, screen } from '@testing-library/react';
// import { AppContext, InitialStateInterface } from '../../../context/context';
// import { marvelReducer } from '../../../reducer/reducer';
// import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';
// import StoriesPage from '../stories-page';
// import { storiesMock } from '../../../mocks/stories-mock';

// describe('<StoriesPage />', () => {
// 	it('should render <Card /> components', async () => {
// 		const mockState: InitialStateInterface = {
// 			characters: [],
// 			comics: [],
// 			stories: storiesMock.data.results,
// 			charactersOptions: [],
// 			comicsOptions: [],
// 			storiesOptions: [],
// 			bookmarks: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 			hiddenResources: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 		};

// 		const { result } = renderHook(() =>
// 			useReducer(marvelReducer, mockState)
// 		);

// 		insertAWrapper(
// 			<AppContext.Provider
// 				value={{
// 					state: result.current[0],
// 					dispatch: result.current[1],
// 				}}
// 			>
// 				<StoriesPage />
// 			</AppContext.Provider>
// 		);

// 		await waitFor(
// 			async () => {
// 				expect(await screen.findAllByRole('link')).toHaveLength(12);
// 			},
// 			{
// 				timeout: 4000,
// 			}
// 		);

// 		expect(
// 			screen.getByText(/war is under way for control of/i)
// 		).toBeInTheDocument();
// 		expect(
// 			screen.getByText(/the world watched as firefighters/i)
// 		).toBeInTheDocument();
// 		expect(
// 			screen.getByText(/Ordinary New York City cop Frankie/i)
// 		).toBeInTheDocument();
// 	});

// 	it('should render filter component', async () => {
// 		const mockState: InitialStateInterface = {
// 			characters: [],
// 			comics: [],
// 			stories: [],
// 			charactersOptions: [],
// 			comicsOptions: [],
// 			storiesOptions: [],
// 			bookmarks: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 			hiddenResources: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 		};

// 		const { result } = renderHook(() =>
// 			useReducer(marvelReducer, mockState)
// 		);

// 		insertAWrapper(
// 			<AppContext.Provider
// 				value={{
// 					state: result.current[0],
// 					dispatch: result.current[1],
// 				}}
// 			>
// 				<StoriesPage />
// 			</AppContext.Provider>
// 		);

// 		const storyFilter = screen.getByPlaceholderText(/filter by character/i);

// 		expect(storyFilter).toBeInTheDocument();
// 	});

// 	it('should render a loading image', async () => {
// 		const mockState: InitialStateInterface = {
// 			characters: [],
// 			comics: [],
// 			stories: [],
// 			charactersOptions: [],
// 			comicsOptions: [],
// 			storiesOptions: [],
// 			bookmarks: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 			hiddenResources: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 		};

// 		const { result } = renderHook(() =>
// 			useReducer(marvelReducer, mockState)
// 		);

// 		insertAWrapper(
// 			<AppContext.Provider
// 				value={{
// 					state: result.current[0],
// 					dispatch: result.current[1],
// 				}}
// 			>
// 				<StoriesPage />
// 			</AppContext.Provider>
// 		);

// 		await waitFor(() => {
// 			expect(screen.getByTestId('loading-component')).toBeInTheDocument();
// 		});
// 	});

// 	it('should render the pagination component', async () => {
// 		const mockState: InitialStateInterface = {
// 			characters: [],
// 			comics: [],
// 			stories: storiesMock.data.results,
// 			charactersOptions: [],
// 			comicsOptions: [],
// 			storiesOptions: [],
// 			bookmarks: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 			hiddenResources: {
// 				characters: [],
// 				comics: [],
// 				stories: [],
// 			},
// 		};

// 		const { result } = renderHook(() =>
// 			useReducer(marvelReducer, mockState)
// 		);

// 		insertAWrapper(
// 			<AppContext.Provider
// 				value={{
// 					state: result.current[0],
// 					dispatch: result.current[1],
// 				}}
// 			>
// 				<StoriesPage />
// 			</AppContext.Provider>
// 		);

// 		await waitFor(() => {
// 			expect(
// 				screen.getByTestId('pagination-component')
// 			).toBeInTheDocument();
// 		});
// 	});
// });
