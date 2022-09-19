import { act, screen } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import DetailsPage from '../details-page';

//* mocks
import { mockcharacters } from '../../../mocks/mock-characters';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({ data: mockcharacters, error: undefined, loading: true }),
}));

describe('<DetailsPage />', () => {
	it('should render a <Loading /> component', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<DetailsPage type='characters' />
				</AppProvider>
			);
		});

		expect(screen.getByTestId('loading-component')).toBeInTheDocument();
	});
});
