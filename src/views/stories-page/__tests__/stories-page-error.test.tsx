import { act, screen } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import StoriesPage from '../stories-page';

//* mocks
import { mockstories } from '../../../mocks/mock-stories';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({
		data: mockstories,
		error: { status: 404, message: 'not found' },
		loading: false,
	}),
}));

describe('<StoriesPage />', () => {
	it('should render an error message if an error occurs', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<StoriesPage />
				</AppProvider>
			);
		});

		expect(screen.getByText(/not found/i)).toBeInTheDocument();
	});
});
