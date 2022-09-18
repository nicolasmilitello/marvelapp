import React, { useReducer } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext, InitialStateInterface } from '../../../context/context';

//* components
import BookmarkIcon from '../bookmark-icon';

//* mocks
import { singleComicMock } from '../../../mocks/single-comic-mock';
import { charactersMock } from '../../../mocks/characters-mock';

//* utils
import { marvelReducer } from '../../../reducer/reducer';

describe('<BookmarkIcon />', () => {
	it('should render a button with a text', () => {
		render(
			<BookmarkIcon
				id={singleComicMock.data.results[0].id}
				type='comics'
				element={singleComicMock.data.results[0]}
			/>
		);

		expect(
			screen.getByRole('button', { name: /ADD FAVORITE/i })
		).toBeInTheDocument();
	});

	it('should dispatch an action to add to state a favorite after clicking on it', async () => {
		const user = userEvent.setup();

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

		render(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<BookmarkIcon
					id={charactersMock.data.results[0].id}
					type='characters'
					element={charactersMock.data.results[0]}
				/>
			</AppContext.Provider>
		);

		await user.click(screen.getByRole('button', { name: /ADD FAVORITE/i }));

		expect(result.current[0].bookmarks.characters).toHaveLength(1);

		expect(result.current[0].bookmarks.characters[0].id).toBe(
			charactersMock.data.results[0].id
		);
	});

	it('should dispatch an action to remove from state a favorite after clicking on it', async () => {
		const user = userEvent.setup();

		const mockState: InitialStateInterface = {
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: [],
			comicsOptions: [],
			storiesOptions: [],
			bookmarks: {
				characters: [],
				comics: [singleComicMock.data.results[0]],
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

		render(
			<AppContext.Provider
				value={{
					state: result.current[0],
					dispatch: result.current[1],
				}}
			>
				<BookmarkIcon
					id={singleComicMock.data.results[0].id}
					type='comics'
					element={singleComicMock.data.results[0]}
				/>
			</AppContext.Provider>
		);

		await user.click(
			screen.getByRole('button', { name: /REMOVE FAVORITE/i })
		);

		expect(result.current[0].bookmarks.comics).toHaveLength(0);
	});
});
