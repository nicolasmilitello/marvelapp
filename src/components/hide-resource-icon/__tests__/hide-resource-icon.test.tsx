import React, { useReducer } from 'react';
import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AppContext, InitialStateInterface } from '../../../context/context';
import { marvelReducer } from '../../../reducer/reducer';

//* components
import HideResourceIcon from '../hide-resource-icon';

//* mocks
import { mockcharacters } from '../../../mocks/mock-characters';
import { mockcomics } from '../../../mocks/mock-comics';

describe('<HideResourceIcon />', () => {
	it('should render a button with a text', () => {
		render(
			<HideResourceIcon
				id={mockcomics.data.results[0].id}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);

		expect(
			screen.getByRole('button', { name: /HIDE/i })
		).toBeInTheDocument();
	});

	it('should dispatch an action to add to state a resource to be hidden after clicking on it', async () => {
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
				<HideResourceIcon
					id={mockcharacters.data.results[0].id}
					type='characters'
					element={mockcharacters.data.results[0]}
				/>
			</AppContext.Provider>
		);

		await user.click(screen.getByRole('button', { name: /HIDE/i }));

		expect(result.current[0].hiddenResources.characters).toHaveLength(1);

		expect(result.current[0].hiddenResources.characters[0].id).toBe(
			mockcharacters.data.results[0].id
		);
	});

	it('should dispatch an action to remove from state a hidden resource after clicking on it', async () => {
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
				comics: [
					mockcomics.data.results[0],
					mockcomics.data.results[1],
				],
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
				<HideResourceIcon
					id={mockcomics.data.results[0].id}
					type='comics'
					element={mockcomics.data.results[0]}
				/>
			</AppContext.Provider>
		);

		await user.click(screen.getByRole('button', { name: /SHOW/i }));

		expect(result.current[0].hiddenResources.comics).toHaveLength(1);

		expect(result.current[0].hiddenResources.comics[0].id).not.toBe(
			mockcomics.data.results[0].id
		);
	});
});
