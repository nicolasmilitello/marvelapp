//* interfaces
import { Data, MarvelResponse } from './general-response-api';

export interface StoriesResponse extends MarvelResponse {
	data: StoriesData;
}

export interface StoriesData extends Data {
	results: StoriesInterface[];
}

export interface StoriesInterface {
	id: number;
	title: string;
	description: string;
	resourceURI: string;
	type: string;
	modified: string;
	thumbnail: null;
	creators: CreatorsCharactersSeriesComicsEvents;
	characters: CreatorsCharactersSeriesComicsEvents;
	series: CreatorsCharactersSeriesComicsEvents;
	comics: CreatorsCharactersSeriesComicsEvents;
	events: CreatorsCharactersSeriesComicsEvents;
	originalIssue: OriginalIssue;
}

export interface CreatorsCharactersSeriesComicsEvents {
	available: number;
	collectionURI: string;
	items: Item[];
	returned: number;
}

export interface Item {
	resourceURI: string;
	name: string;
	role?: string;
}

export interface OriginalIssue {
	resourceURI: string;
	name: string;
}
