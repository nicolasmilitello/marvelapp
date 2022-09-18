import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loading from '../loading';

describe('<Loading/>', () => {
	it('should display an image', () => {
		render(<Loading />);

		const imageAlt = screen.getByRole('img');
		expect(imageAlt).toBeTruthy();
	});
});
