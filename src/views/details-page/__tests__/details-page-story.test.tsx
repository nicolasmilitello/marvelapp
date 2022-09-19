import { act, screen, waitFor } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import DetailsPage from '../details-page';

//* mocks
import { mocksinglestory } from '../../../mocks/mock-single-story';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({
		data: mocksinglestory,
		error: undefined,
		loading: false,
	}),
}));

describe('<DetailsPage />', () => {
	const renderComponent = async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<DetailsPage type='stories' />
				</AppProvider>,
				'/stories/8'
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
