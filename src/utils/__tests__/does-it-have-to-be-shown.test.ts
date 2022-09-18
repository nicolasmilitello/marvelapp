import { mockedStateForUtilTest } from '../../mocks/mocked-state-for-util-test';
import doesItHaveToBeHidden from '../does-it-have-to-be-shown';

describe('doesItHaveToBeShown function', () => {
	it('should return \'false\' if the id of the resource received as parameter is not included into the hidden resources', () => {
		const result = doesItHaveToBeHidden(
			mockedStateForUtilTest,
			'characters',
			1009144
		);
		expect(result).toBe(false);
	});

	it('should return \'true\' if the character id received as parameter is included into the hidden resources', () => {
		const result = doesItHaveToBeHidden(
			mockedStateForUtilTest,
			'characters',
			1011334
		);
		expect(result).toBe(true);
	});

	it('should return \'true\' if the comic id received as parameter is included into the hidden resources', () => {
		const result = doesItHaveToBeHidden(
			mockedStateForUtilTest,
			'comics',
			82970
		);
		expect(result).toBe(true);
	});

	it('should return \'true\' if the story id received as parameter is included into the hidden resources', () => {
		const result = doesItHaveToBeHidden(
			mockedStateForUtilTest,
			'stories',
			11
		);
		expect(result).toBe(true);
	});
});
