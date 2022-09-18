import { mockcharacters } from './mock-characters';

export const mockedResponse = {
	ok: true,
	status: 200,
	statusText: 'OK',
	json: () => Promise.resolve(mockcharacters),
};
