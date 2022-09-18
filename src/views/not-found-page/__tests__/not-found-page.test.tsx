import { screen } from '@testing-library/react';
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';
import NotFoundPage from '../not-found-page';

describe('<NotFoundPage/>', () => {
	it('should render a text about the page was not found', async () => {
		insertAWrapper(<NotFoundPage />);

		expect(
			screen.getByText(/Sorry, this page doesn't exist/i)
		).toBeInTheDocument();
	});

	it('should render an image', async () => {
		insertAWrapper(<NotFoundPage />);

		expect(screen.getByRole('img')).toBeInTheDocument();
	});
});
