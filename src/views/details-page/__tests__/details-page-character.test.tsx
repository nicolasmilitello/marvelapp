import { act, screen, waitFor } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import DetailsPage from '../details-page';

//* mocks
import { mocksinglecharacter } from '../../../mocks/mock-single-character';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({
		data: mocksinglecharacter,
		error: undefined,
		loading: false,
	}),
}));

describe('<DetailsPage />', () => {
	const renderComponent = async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<DetailsPage type='characters' />
				</AppProvider>,
				'/characters/1009157'
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
