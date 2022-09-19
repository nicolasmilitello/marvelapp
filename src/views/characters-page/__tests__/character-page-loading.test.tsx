import { act, screen } from '@testing-library/react';
import { AppProvider } from '../../../context/context';

//* component
import CharacterPage from '../character-page';

//* mocks
import { mockcharacters } from '../../../mocks/mock-characters';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked hook
jest.mock('../../../hooks/useFetch.ts', () => ({
	__esModule: true,
	default: () => ({ data: mockcharacters, error: undefined, loading: true }),
}));

describe('<CharacterPage />', () => {
	it('should render a <Loading /> component', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<CharacterPage />
				</AppProvider>
			);
		});

		expect(screen.getByTestId('loading-component')).toBeInTheDocument();
	});
});
