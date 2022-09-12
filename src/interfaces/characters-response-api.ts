//* interfaces
import { Data, MarvelResponse } from './general-response-api';

export interface CharactersResponse extends MarvelResponse {
	data: CharactersData;
}

export interface CharactersData extends Data {
	results: CharactersInterface[];
}

export interface CharactersInterface {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: Thumbnail;
	resourceURI: string;
	comics: ComicsSeriesEventsInterface;
	series: ComicsSeriesEventsInterface;
	stories: Stories;
	events: ComicsSeriesEventsInterface;
	urls: URL[];
}

export interface ComicsSeriesEventsInterface {
	available: number;
	collectionURI: string;
	items: Item[];
	returned: number;
}

export interface Item {
	resourceURI: string;
	name: string;
}

export interface Stories {
	available: number;
	collectionURI: string;
	items: StoriesItem[];
	returned: number;
}

export interface StoriesItem {
	resourceURI: string;
	name: string;
	type: string;
}

export interface Thumbnail {
	path: string;
	extension: string;
}

export interface URL {
	type: string;
	url: string;
}
