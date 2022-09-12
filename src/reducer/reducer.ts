//* interfaces
import {
	BookmarksAndHiddenRosourcesType,
	InitialStateInterface,
} from '../context/context';
import { CharactersInterface } from '../interfaces/characters-response-api';
import { ComicsInterface } from '../interfaces/comics-response-api';
import { SelectOptionsType } from '../interfaces/select-options-type';
import { SingleComicInterface } from '../interfaces/single-comic-response-api';
import { StoriesInterface } from '../interfaces/stories-response-api';

type BookmarkAndHiddenResourcePayloadType = {
	resource: string;
	element: SingleComicInterface | CharactersInterface | StoriesInterface;
};

export type ActionType =
	| { type: 'SET_CHARACTERS'; payload: CharactersInterface[] }
	| {
			type: 'SET_COMICS';
			payload: ComicsInterface[] | SingleComicInterface[];
	  }
	| { type: 'SET_STORIES'; payload: StoriesInterface[] }
	| { type: 'SET_CHARACTERS_OPTIONS'; payload: SelectOptionsType[] }
	| { type: 'SET_COMICS_OPTIONS'; payload: SelectOptionsType[] }
	| { type: 'SET_STORIES_OPTIONS'; payload: SelectOptionsType[] }
	| { type: 'SET_BOOKMARKS'; payload: BookmarksAndHiddenRosourcesType }
	| { type: 'ADD_BOOKMARK'; payload: BookmarkAndHiddenResourcePayloadType }
	| { type: 'REMOVE_BOOKMARK'; payload: BookmarkAndHiddenResourcePayloadType }
	| { type: 'REMOVE_ALL_BOOKMARKS' }
	| { type: 'SET_HIDDEN_RESOURCES'; payload: BookmarksAndHiddenRosourcesType }
	| { type: 'HIDE_RESOURCE'; payload: BookmarkAndHiddenResourcePayloadType }
	| { type: 'SHOW_RESOURCE'; payload: BookmarkAndHiddenResourcePayloadType }
	| { type: 'SHOW_ALL_RESOURCES' };

export const marvelReducer = (
	state: InitialStateInterface,
	action: ActionType
) => {
	switch (action.type) {
		case 'SET_CHARACTERS':
			return {
				...state,
				characters: action.payload,
			};
		case 'SET_COMICS':
			return {
				...state,
				comics: action.payload,
			};
		case 'SET_STORIES':
			return {
				...state,
				stories: action.payload,
			};
		case 'SET_CHARACTERS_OPTIONS':
			return {
				...state,
				charactersOptions: action.payload,
			};
		case 'SET_COMICS_OPTIONS':
			return {
				...state,
				comicsOptions: action.payload,
			};
		case 'SET_STORIES_OPTIONS':
			return {
				...state,
				storiesOptions: action.payload,
			};
		case 'SET_BOOKMARKS':
			return {
				...state,
				bookmarks: action.payload,
			};
		case 'ADD_BOOKMARK':
			return {
				...state,
				bookmarks: {
					...state.bookmarks,
					[action.payload.resource]: [
						...state.bookmarks[
							action.payload
								.resource as keyof InitialStateInterface['bookmarks']
						],
						action.payload.element,
					],
				},
			};
		case 'REMOVE_BOOKMARK':
			let filteredBookmarks:
				| CharactersInterface[]
				| ComicsInterface[]
				| StoriesInterface[] = [];

			if (action.payload.resource === 'characters') {
				filteredBookmarks = state.bookmarks[
					action.payload.resource as 'characters'
				].filter(
					(pieceOfData: CharactersInterface) =>
						pieceOfData.id !== action.payload.element.id
				);
			}

			if (action.payload.resource === 'comics') {
				filteredBookmarks = state.bookmarks[
					action.payload.resource as 'comics'
				].filter(
					(pieceOfData: ComicsInterface) =>
						pieceOfData.id !== action.payload.element.id
				);
			}

			if (action.payload.resource === 'stories') {
				filteredBookmarks = state.bookmarks[
					action.payload.resource as 'stories'
				].filter(
					(pieceOfData: StoriesInterface) =>
						pieceOfData.id !== action.payload.element.id
				);
			}

			return {
				...state,
				bookmarks: {
					...state.bookmarks,
					[action.payload.resource]: filteredBookmarks,
				},
			};
		case 'REMOVE_ALL_BOOKMARKS':
			return {
				...state,
				bookmarks: {
					characters: [],
					comics: [],
					stories: [],
				},
			};
		case 'SET_HIDDEN_RESOURCES':
			return {
				...state,
				hiddenResources: action.payload,
			};
		case 'HIDE_RESOURCE':
			return {
				...state,
				hiddenResources: {
					...state.hiddenResources,
					[action.payload.resource]: [
						...state.hiddenResources[
							action.payload
								.resource as keyof InitialStateInterface['hiddenResources']
						],
						action.payload.element,
					],
				},
			};
		case 'SHOW_RESOURCE':
			let filteredhiddenResources:
				| CharactersInterface[]
				| ComicsInterface[]
				| StoriesInterface[] = [];

			if (action.payload.resource === 'characters') {
				filteredhiddenResources = state.hiddenResources[
					action.payload.resource as 'characters'
				].filter(
					(pieceOfData: CharactersInterface) =>
						pieceOfData.id !== action.payload.element.id
				);
			}

			if (action.payload.resource === 'comics') {
				filteredhiddenResources = state.hiddenResources[
					action.payload.resource as 'comics'
				].filter(
					(pieceOfData: ComicsInterface) =>
						pieceOfData.id !== action.payload.element.id
				);
			}

			if (action.payload.resource === 'stories') {
				filteredhiddenResources = state.hiddenResources[
					action.payload.resource as 'stories'
				].filter(
					(pieceOfData: StoriesInterface) =>
						pieceOfData.id !== action.payload.element.id
				);
			}

			return {
				...state,
				hiddenResources: {
					...state.hiddenResources,
					[action.payload.resource]: filteredhiddenResources,
				},
			};
		case 'SHOW_ALL_RESOURCES':
			return {
				...state,
				hiddenResources: {
					characters: [],
					comics: [],
					stories: [],
				},
			};
		default:
			return state;
	}
};
