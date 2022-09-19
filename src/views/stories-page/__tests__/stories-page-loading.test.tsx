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
	default: () => ({ data: mockstories, error: undefined, loading: true }),
}));

describe('<StoriesPage />', () => {
	it('should render a <Loading /> component', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<StoriesPage />
				</AppProvider>
			);
		});

		expect(screen.getByTestId('loading-component')).toBeInTheDocument();
	});
});
