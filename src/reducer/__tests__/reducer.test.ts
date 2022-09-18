import { marvelReducer } from '../reducer';

//* mocks
import { mockcharacters } from '../../mocks/mock-characters';
import { mockcomics } from '../../mocks/mock-comics';
import { mockstories } from '../../mocks/mock-stories';
import { characterOptionsMock } from '../../mocks/character-options-mock';
import { comicsOptionsMock } from '../../mocks/comics-options-mock';
import { storiesOptionsMock } from '../../mocks/stories-options-mock';

describe('The Marvel reducer', () => {
	const initialState = {
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

	it('should add characters if receives an action type SET_CHARACTERS', () => {
		const actionToDispatch = {
			type: 'SET_CHARACTERS' as const,
			payload: [mockcharacters.data.results[0]],
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [mockcharacters.data.results[0]],
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
		});
	});

	it('should add comics if receives an action type SET_COMICS', () => {
		const actionToDispatch = {
			type: 'SET_COMICS' as const,
			payload: [mockcomics.data.results[0]],
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [mockcomics.data.results[0]],
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
		});
	});

	it('should add stories if receives an action type SET_STORIES', () => {
		const actionToDispatch = {
			type: 'SET_STORIES' as const,
			payload: [mockstories.data.results[0]],
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [mockstories.data.results[0]],
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
		});
	});

	it('should add character options if receives an action type SET_CHARACTERS_OPTIONS', () => {
		const actionToDispatch = {
			type: 'SET_CHARACTERS_OPTIONS' as const,
			payload: characterOptionsMock,
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: characterOptionsMock,
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
		});
	});

	it('should add comics options if receives an action type SET_COMICS_OPTIONS', () => {
		const actionToDispatch = {
			type: 'SET_COMICS_OPTIONS' as const,
			payload: comicsOptionsMock,
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: [],
			comicsOptions: comicsOptionsMock,
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
		});
	});

	it('should add stories options if receives an action type SET_STORIES_OPTIONS', () => {
		const actionToDispatch = {
			type: 'SET_STORIES_OPTIONS' as const,
			payload: storiesOptionsMock,
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: [],
			comicsOptions: [],
			storiesOptions: storiesOptionsMock,
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
		});
	});

	it('should add a bookmark list to the state if receives an action type SET_BOOKMARKS', () => {
		const actionToDispatch = {
			type: 'SET_BOOKMARKS' as const,
			payload: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: [],
			comicsOptions: [],
			storiesOptions: [],
			bookmarks: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
			hiddenResources: {
				characters: [],
				comics: [],
				stories: [],
			},
		});
	});

	it('should add a bookmark if receives an action type ADD_BOOKMARK', () => {
		const actionToDispatch = {
			type: 'ADD_BOOKMARK' as const,
			payload: {
				resource: 'comics',
				element: mockcomics.data.results[0],
			},
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: [],
			comicsOptions: [],
			storiesOptions: [],
			bookmarks: {
				characters: [],
				comics: [mockcomics.data.results[0]],
				stories: [],
			},
			hiddenResources: {
				characters: [],
				comics: [],
				stories: [],
			},
		});
	});

	describe('should remove a bookmark if receives an action type REMOVE_BOOKMARK', () => {
		const addBookmarkActionToDispatch = {
			type: 'SET_BOOKMARKS' as const,
			payload: {
				characters: [
					mockcharacters.data.results[0],
					mockcharacters.data.results[1],
				],
				comics: [
					mockcomics.data.results[0],
					mockcomics.data.results[1],
				],
				stories: [
					mockstories.data.results[0],
					mockstories.data.results[1],
				],
			},
		};

		const updatedStateWithBookmarks = marvelReducer(
			initialState,
			addBookmarkActionToDispatch
		);

		it('comics bookmark', () => {
			expect(updatedStateWithBookmarks).toEqual({
				characters: [],
				comics: [],
				stories: [],
				charactersOptions: [],
				comicsOptions: [],
				storiesOptions: [],
				bookmarks: {
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});

			const actionToDispatch = {
				type: 'REMOVE_BOOKMARK' as const,
				payload: {
					resource: 'comics',
					element: mockcomics.data.results[0],
				},
			};

			const updatedStateWithoutComicBookmark = marvelReducer(
				updatedStateWithBookmarks,
				actionToDispatch
			);

			expect(updatedStateWithoutComicBookmark).toEqual({
				characters: [],
				comics: [],
				stories: [],
				charactersOptions: [],
				comicsOptions: [],
				storiesOptions: [],
				bookmarks: {
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [mockcomics.data.results[1]],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});
		});

		it('character bookmark', () => {
			expect(updatedStateWithBookmarks).toEqual({
				characters: [],
				comics: [],
				stories: [],
				charactersOptions: [],
				comicsOptions: [],
				storiesOptions: [],
				bookmarks: {
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});

			const actionToDispatch = {
				type: 'REMOVE_BOOKMARK' as const,
				payload: {
					resource: 'characters',
					element: mockcharacters.data.results[1],
				},
			};

			const updatedStateWithoutCharacterBookmark = marvelReducer(
				updatedStateWithBookmarks,
				actionToDispatch
			);

			expect(updatedStateWithoutCharacterBookmark).toEqual({
				characters: [],
				comics: [],
				stories: [],
				charactersOptions: [],
				comicsOptions: [],
				storiesOptions: [],
				bookmarks: {
					characters: [mockcharacters.data.results[0]],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});
		});

		it('story bookmark', () => {
			expect(updatedStateWithBookmarks).toEqual({
				characters: [],
				comics: [],
				stories: [],
				charactersOptions: [],
				comicsOptions: [],
				storiesOptions: [],
				bookmarks: {
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});

			const actionToDispatch = {
				type: 'REMOVE_BOOKMARK' as const,
				payload: {
					resource: 'stories',
					element: mockstories.data.results[0],
				},
			};

			const updatedStateWithoutStoryBookmark = marvelReducer(
				updatedStateWithBookmarks,
				actionToDispatch
			);

			expect(updatedStateWithoutStoryBookmark).toEqual({
				characters: [],
				comics: [],
				stories: [],
				charactersOptions: [],
				comicsOptions: [],
				storiesOptions: [],
				bookmarks: {
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [mockstories.data.results[1]],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});
		});
	});

	it('should remove all bookmarks from state if receives an action type REMOVE_ALL_BOOKMARKS', () => {
		const addBookmarkActionToDispatch = {
			type: 'SET_BOOKMARKS' as const,
			payload: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		};

		const updatedStateWithBookmarks = marvelReducer(
			initialState,
			addBookmarkActionToDispatch
		);

		expect(updatedStateWithBookmarks).toEqual({
			characters: [],
			comics: [],
			stories: [],
			charactersOptions: [],
			comicsOptions: [],
			storiesOptions: [],
			bookmarks: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
			hiddenResources: {
				characters: [],
				comics: [],
				stories: [],
			},
		});

		const actionToDispatch = {
			type: 'REMOVE_ALL_BOOKMARKS' as const,
		};

		const updatedStateWithoutBookmarks = marvelReducer(
			updatedStateWithBookmarks,
			actionToDispatch
		);

		expect(updatedStateWithoutBookmarks).toEqual({
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
		});
	});

	it('should add a hidden resources list to state if receives an action type SET_HIDDEN_RESOURCES', () => {
		const actionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
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
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		});
	});

	it('should add a resource if receives an action type HIDE_RESOURCE', () => {
		const actionToDispatch = {
			type: 'HIDE_RESOURCE' as const,
			payload: {
				resource: 'comics',
				element: mockcomics.data.results[0],
			},
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
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
				comics: [mockcomics.data.results[0]],
				stories: [],
			},
		});
	});

	describe('should remove a resource if it receives an action type SHOW_RESOURCE', () => {
		const addHiddenResourcesActionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [
					mockcharacters.data.results[0],
					mockcharacters.data.results[1],
				],
				comics: [
					mockcomics.data.results[0],
					mockcomics.data.results[1],
				],
				stories: [
					mockstories.data.results[0],
					mockstories.data.results[1],
				],
			},
		};

		const updatedStateWithHiddenResources = marvelReducer(
			initialState,
			addHiddenResourcesActionToDispatch
		);

		it('comic resource', () => {
			expect(updatedStateWithHiddenResources).toEqual({
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
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
			});

			const actionToDispatch = {
				type: 'SHOW_RESOURCE' as const,
				payload: {
					resource: 'comics',
					element: mockcomics.data.results[1],
				},
			};

			const updatedStateWithoutComicResource = marvelReducer(
				updatedStateWithHiddenResources,
				actionToDispatch
			);

			expect(updatedStateWithoutComicResource).toEqual({
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
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [mockcomics.data.results[0]],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
			});
		});

		it('character resource', () => {
			expect(updatedStateWithHiddenResources).toEqual({
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
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
			});

			const actionToDispatch = {
				type: 'SHOW_RESOURCE' as const,
				payload: {
					resource: 'characters',
					element: mockcharacters.data.results[0],
				},
			};

			const updatedStateWithoutCharacterResource = marvelReducer(
				updatedStateWithHiddenResources,
				actionToDispatch
			);

			expect(updatedStateWithoutCharacterResource).toEqual({
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
					characters: [mockcharacters.data.results[1]],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
			});
		});

		it('story resource', () => {
			expect(updatedStateWithHiddenResources).toEqual({
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
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [
						mockstories.data.results[0],
						mockstories.data.results[1],
					],
				},
			});

			const actionToDispatch = {
				type: 'SHOW_RESOURCE' as const,
				payload: {
					resource: 'stories',
					element: mockstories.data.results[1],
				},
			};

			const updatedStateWithoutStoryResource = marvelReducer(
				updatedStateWithHiddenResources,
				actionToDispatch
			);

			expect(updatedStateWithoutStoryResource).toEqual({
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
					characters: [
						mockcharacters.data.results[0],
						mockcharacters.data.results[1],
					],
					comics: [
						mockcomics.data.results[0],
						mockcomics.data.results[1],
					],
					stories: [mockstories.data.results[0]],
				},
			});
		});
	});

	it('should remove all hidden resources from state if receives an action type SHOW_ALL_RESOURCES', () => {
		const addHiddenResourcesActionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		};

		const updatedStateWithHiddenResources = marvelReducer(
			initialState,
			addHiddenResourcesActionToDispatch
		);

		expect(updatedStateWithHiddenResources).toEqual({
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
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		});

		const actionToDispatch = {
			type: 'SHOW_ALL_RESOURCES' as const,
		};

		const updatedStateWithoutHiddenResources = marvelReducer(
			updatedStateWithHiddenResources,
			actionToDispatch
		);

		expect(updatedStateWithoutHiddenResources).toEqual({
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
		});
	});

	it('should return the state', () => {
		const addHiddenResourcesActionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		};

		const updatedStateWithHiddenResources = marvelReducer(
			initialState,
			addHiddenResourcesActionToDispatch
		);

		expect(updatedStateWithHiddenResources).toEqual({
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
				characters: [mockcharacters.data.results[0]],
				comics: [mockcomics.data.results[0]],
				stories: [mockstories.data.results[0]],
			},
		});

		const actionToDispatch = {
			type: 'SHOW_ALL_RESOURCES' as const,
		};

		const updatedStateWithoutHiddenResources = marvelReducer(
			updatedStateWithHiddenResources,
			actionToDispatch
		);

		expect(updatedStateWithoutHiddenResources).toEqual({
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
		});
	});
});
