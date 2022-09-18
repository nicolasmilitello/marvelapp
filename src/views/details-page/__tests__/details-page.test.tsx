import { renderHook, screen, waitFor } from '@testing-library/react';
// import { act } from 'react-test-renderer';
import { useReducer } from 'react';
import { AppContext, InitialStateInterface } from '../../../context/context';
import { marvelReducer } from '../../../reducer/reducer';

//* components
import DetailsPage from '../details-page';

//* mocks
import { charactersMock } from '../../../mocks/characters-mock';
import { comicsMock } from '../../../mocks/comics-mock';
import { storiesMock } from '../../../mocks/stories-mock';
// import { mockedResponse } from '../../../mocks/mocked-response';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// global.fetch = jest.fn(() => Promise.resolve(mockedResponse)) as jest.Mock;

describe('<DetailsPage />', () => {
	// it('should render <Card /> components', async () => {
	// 	const mockState: InitialStateInterface = {
	// 		characters: [charactersMock.data.results[0]],
	// 		comics: comicsMock.data.results,
	// 		stories: storiesMock.data.results,
	// 		charactersOptions: [],
	// 		comicsOptions: [],
	// 		storiesOptions: [],
	// 		bookmarks: {
	// 			characters: [],
	// 			comics: [],
	// 			stories: [],
	// 		},
	// 		hiddenResources: {
	// 			characters: [],
	// 			comics: [],
	// 			stories: [],
	// 		},
	// 	};

	// 	const { result } = renderHook(() =>
	// 		useReducer(marvelReducer, mockState)
	// 	);

	// 	await act(async () => {
	// 		insertAWrapper(
	// 			<AppContext.Provider
	// 				value={{
	// 					state: result.current[0],
	// 					dispatch: result.current[1],
	// 				}}
	// 			>
	// 				<DetailsPage type='characters' />
	// 			</AppContext.Provider>
	// 		);
	// 		expect(await screen.findByText(/3-D Man/i)).toBeInTheDocument();
	// 		expect(fetch).toHaveBeenCalledTimes(3);
	// 	});
	// });

	it('should render a <Loading /> component', async () => {
		const mockState: InitialStateInterface = {
			characters: [charactersMock.data.results[0]],
			comics: comicsMock.data.results,
			stories: storiesMock.data.results,
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
				<DetailsPage type='characters' />
			</AppContext.Provider>
		);

		await waitFor(() => {
			expect(screen.getByTestId('loading-component')).toBeInTheDocument();
		});
	});

	it('should render a <Footer /> component', async () => {
		const mockState: InitialStateInterface = {
			characters: [charactersMock.data.results[0]],
			comics: comicsMock.data.results,
			stories: storiesMock.data.results,
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
				<DetailsPage type='characters' />
			</AppContext.Provider>
		);

		expect(screen.getByTestId('footer-component')).toBeInTheDocument();
	});
});
