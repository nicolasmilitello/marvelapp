import { act, screen, waitFor } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import DetailsPage from '../details-page';

//* mocks
import { mocksinglecomic } from '../../../mocks/mock-single-comic';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({
		data: mocksinglecomic,
		error: undefined,
		loading: false,
	}),
}));

describe('<DetailsPage />', () => {
	const renderComponent = async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<DetailsPage type='comics' />
				</AppProvider>,
				'/comics/1158'
			);
		});
	};

	it('should render a <Footer /> component', async () => {
		await renderComponent();

		await waitFor(() => {
			expect(screen.getByTestId('footer-component')).toBeInTheDocument();
		});
	});
});
