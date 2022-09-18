import { act, screen } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import ComicsPage from '../comics-page';

//* constants
import { formatSelectOptions } from '../../../constants/format-select-options';

//* mocks
import { mockcomics } from '../../../mocks/mock-comics';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({ data: mockcomics, error: undefined, loading: false }),
}));

describe('<ComicsPage />', () => {
	const renderComponent = async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<ComicsPage />
				</AppProvider>
			);
		});
	};

	it('should render <Card /> components', async () => {
		await renderComponent();

		expect(await screen.findAllByRole('link')).toHaveLength(12);
		expect(
			screen.getByText(/Startling Stories: The Incorrigible Hulk/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/ULTIMATE X-MEN VOL. 5: ULTIMATE/i)
		).toBeInTheDocument();
		expect(
			screen.getByText(/Marvel Age Spider-Man Vol. 2: Everyday Hero/i)
		).toBeInTheDocument();
	});

	it('should render filter components', async () => {
		await renderComponent();

		const searchFilter = screen.getByPlaceholderText(/search by title/i);
		const storyFilter = screen.getByPlaceholderText(/filter by format/i);

		expect(searchFilter).toBeInTheDocument();
		expect(storyFilter).toBeInTheDocument();

		let options = screen.getAllByTestId('select-option');
		expect(options).toHaveLength(formatSelectOptions.length);
	});

	it('should render a <Pagination /> component', async () => {
		await renderComponent();

		expect(screen.getByTestId('pagination-component')).toBeInTheDocument();
	});

	it('should render a <Footer /> component', async () => {
		await renderComponent();

		expect(screen.getByTestId('footer-component')).toBeInTheDocument();
	});
});
