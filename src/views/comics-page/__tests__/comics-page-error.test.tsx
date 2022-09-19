import { act, screen } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import ComicsPage from '../comics-page';

//* mocks
import { mockcomics } from '../../../mocks/mock-comics';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({
		data: mockcomics,
		error: { status: 404, message: 'not found' },
		loading: false,
	}),
}));

describe('<ComicsPage />', () => {
	it('should render an error message if an error occurs', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<ComicsPage />
				</AppProvider>
			);
		});

		expect(screen.getByText(/not found/i)).toBeInTheDocument();
	});
});
