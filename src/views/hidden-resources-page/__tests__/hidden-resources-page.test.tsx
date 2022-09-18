import { screen } from '@testing-library/react';
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';
import HiddenResourcesPage from '../hidden-resources-page';

describe('<HiddenResourcesPage />', () => {
	beforeEach(() => {
		insertAWrapper(<HiddenResourcesPage />);
	});

	it('should render a <RestartButton /> component', async () => {
		expect(
			screen.getByTestId('restart-button-component')
		).toBeInTheDocument();
	});

	it('should render three <BookmarkAndHiddenResourcesCollection /> components', async () => {
		expect(
			screen.getAllByTestId(
				'bookmark-and-hidden-resources-collection-component'
			)
		).toHaveLength(3);
		expect(screen.getAllByText(/characters/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/comics/i)[0]).toBeInTheDocument();
		expect(screen.getAllByText(/stories/i)[0]).toBeInTheDocument();
	});

	it('should render a <Footer /> component', async () => {
		expect(screen.getByTestId('footer-component')).toBeInTheDocument();
	});
});
