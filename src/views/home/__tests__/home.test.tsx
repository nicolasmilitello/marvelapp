import { screen } from '@testing-library/react';

//* components
import Home from '../home';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<Home/>', () => {
	it('should have some text about Marvel', () => {
		insertAWrapper(<Home />);

		const text = screen.getByText(/The Walt Disney Company/i);
		expect(text).toBeInTheDocument();
	});

	it('should have three links', () => {
		insertAWrapper(<Home />);

		const link = screen.getAllByRole('link');
		expect(link.length).toBe(3);
	});
});
