export interface MarvelResponse {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
}

export interface Data {
	offset: number;
	limit: number;
	total: number;
	count: number;
}
