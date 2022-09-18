import { charactersMock } from './characters-mock';
export const mockedResponse = {
	ok: true,
	status: 200,
	statusText: 'OK',
	json: () => Promise.resolve(charactersMock),
};
