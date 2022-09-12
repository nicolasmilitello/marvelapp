//* interfaces
import { MarvelResponse, Data } from './general-response-api';
import { TextObject } from './comics-response-api';

export interface ComicSingleResponse extends MarvelResponse {
	data: ComicSingleData;
}

export interface ComicSingleData extends Data {
	results: SingleComicInterface[];
}

export interface SingleComicInterface {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: null | string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	textObjects: TextObject[] | [];
	resourceURI: string;
	urls: URL[];
	series: Series;
	variants: Series[];
	collections: Series[] | [];
	collectedIssues: Series[] | [];
	dates: DateElement[];
	prices: Price[];
	thumbnail: Thumbnail;
	images: Thumbnail[] | [];
	creators: CreatorsCharactersStoriesEventsInterface;
	characters: CreatorsCharactersStoriesEventsInterface;
	stories: CreatorsCharactersStoriesEventsInterface;
	events: CreatorsCharactersStoriesEventsInterface;
}

export interface CreatorsCharactersStoriesEventsInterface {
	available: number;
	collectionURI: string;
	items: Item[];
	returned: number;
}

export interface Item {
	resourceURI: string;
	name: string;
	role?: string;
	type?: string;
}

export interface DateElement {
	type: string;
	date: string;
}

export interface Price {
	type: string;
	price: number;
}

export interface Series {
	resourceURI: string;
	name: string;
}

export interface Thumbnail {
	path: string;
	extension: string;
}

export interface URL {
	type: string;
	url: string;
}
