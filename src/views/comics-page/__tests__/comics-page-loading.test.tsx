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
	default: () => ({ data: mockcomics, error: undefined, loading: true }),
}));

describe('<ComicsPage />', () => {
	it('should render a <Loading /> component', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<ComicsPage />
				</AppProvider>
			);
		});

		expect(screen.getByTestId('loading-component')).toBeInTheDocument();
	});
});
