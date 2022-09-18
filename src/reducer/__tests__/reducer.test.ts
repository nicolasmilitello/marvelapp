import { marvelReducer } from '../reducer';

//* mocks
import { singleComicMock } from '../../mocks/single-comic-mock';
import { charactersMock } from '../../mocks/characters-mock';
import { comicsMock } from '../../mocks/comics-mock';
import { storiesMock } from '../../mocks/stories-mock';
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

	it('should add characters if receives an action type \'SET_CHARACTERS\'', () => {
		const actionToDispatch = {
			type: 'SET_CHARACTERS' as const,
			payload: [charactersMock.data.results[0]],
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [charactersMock.data.results[0]],
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

	it('should add comics if receives an action type \'SET_COMICS\'', () => {
		const actionToDispatch = {
			type: 'SET_COMICS' as const,
			payload: [comicsMock.data.results[0]],
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [comicsMock.data.results[0]],
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

	it('should add stories if receives an action type \'SET_STORIES\'', () => {
		const actionToDispatch = {
			type: 'SET_STORIES' as const,
			payload: [storiesMock.data.results[0]],
		};

		const updatedState = marvelReducer(initialState, actionToDispatch);

		expect(updatedState).toEqual({
			characters: [],
			comics: [],
			stories: [storiesMock.data.results[0]],
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

	it('should add character options if receives an action type \'SET_CHARACTERS_OPTIONS\'', () => {
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

	it('should add comics options if receives an action type \'SET_COMICS_OPTIONS\'', () => {
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

	it('should add stories options if receives an action type \'SET_STORIES_OPTIONS\'', () => {
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

	it('should add a bookmark list to the state if receives an action type \'SET_BOOKMARKS\'', () => {
		const actionToDispatch = {
			type: 'SET_BOOKMARKS' as const,
			payload: {
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
			},
			hiddenResources: {
				characters: [],
				comics: [],
				stories: [],
			},
		});
	});

	it('should add a bookmark if receives an action type \'ADD_BOOKMARK\'', () => {
		const actionToDispatch = {
			type: 'ADD_BOOKMARK' as const,
			payload: {
				resource: 'comics',
				element: singleComicMock.data.results[0],
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
				comics: [singleComicMock.data.results[0]],
				stories: [],
			},
			hiddenResources: {
				characters: [],
				comics: [],
				stories: [],
			},
		});
	});

	describe('should remove a bookmark if receives an action type \'REMOVE_BOOKMARK\',', () => {
		const addBookmarkActionToDispatch = {
			type: 'SET_BOOKMARKS' as const,
			payload: {
				characters: [
					charactersMock.data.results[0],
					charactersMock.data.results[1],
				],
				comics: [
					comicsMock.data.results[0],
					comicsMock.data.results[1],
				],
				stories: [
					storiesMock.data.results[0],
					storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
					element: comicsMock.data.results[0],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [comicsMock.data.results[1]],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
					element: charactersMock.data.results[1],
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
					characters: [charactersMock.data.results[0]],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
					element: storiesMock.data.results[0],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [storiesMock.data.results[1]],
				},
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			});
		});
	});

	it('should remove all bookmarks from state if receives an action type \'REMOVE_ALL_BOOKMARKS\'', () => {
		const addBookmarkActionToDispatch = {
			type: 'SET_BOOKMARKS' as const,
			payload: {
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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

	it('should add a hidden resources list to state if receives an action type \'SET_HIDDEN_RESOURCES\'', () => {
		const actionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
			},
		});
	});

	it('should add a resource if receives an action type \'HIDE_RESOURCE\'', () => {
		const actionToDispatch = {
			type: 'HIDE_RESOURCE' as const,
			payload: {
				resource: 'comics',
				element: singleComicMock.data.results[0],
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
				comics: [singleComicMock.data.results[0]],
				stories: [],
			},
		});
	});

	describe('should remove a resource if it receives an action type \'SHOW_RESOURCE\',', () => {
		const addHiddenResourcesActionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [
					charactersMock.data.results[0],
					charactersMock.data.results[1],
				],
				comics: [
					comicsMock.data.results[0],
					comicsMock.data.results[1],
				],
				stories: [
					storiesMock.data.results[0],
					storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
					],
				},
			});

			const actionToDispatch = {
				type: 'SHOW_RESOURCE' as const,
				payload: {
					resource: 'comics',
					element: comicsMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [comicsMock.data.results[0]],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
					],
				},
			});

			const actionToDispatch = {
				type: 'SHOW_RESOURCE' as const,
				payload: {
					resource: 'characters',
					element: charactersMock.data.results[0],
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
					characters: [charactersMock.data.results[1]],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [
						storiesMock.data.results[0],
						storiesMock.data.results[1],
					],
				},
			});

			const actionToDispatch = {
				type: 'SHOW_RESOURCE' as const,
				payload: {
					resource: 'stories',
					element: storiesMock.data.results[1],
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
						charactersMock.data.results[0],
						charactersMock.data.results[1],
					],
					comics: [
						comicsMock.data.results[0],
						comicsMock.data.results[1],
					],
					stories: [storiesMock.data.results[0]],
				},
			});
		});
	});

	it('should remove all hidden resources from state if receives an action type \'SHOW_ALL_RESOURCES\'', () => {
		const addHiddenResourcesActionToDispatch = {
			type: 'SET_HIDDEN_RESOURCES' as const,
			payload: {
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
				characters: [charactersMock.data.results[0]],
				comics: [singleComicMock.data.results[0]],
				stories: [storiesMock.data.results[0]],
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
