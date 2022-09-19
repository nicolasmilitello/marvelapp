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
	default: () => ({
		data: mockcharacters,
		error: { status: 404, message: 'not found' },
		loading: false,
	}),
}));

describe('<CharacterPage />', () => {
	it('should render an error message if an error occurs', async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<CharacterPage />
				</AppProvider>
			);
		});

		expect(screen.getByText(/not found/i)).toBeInTheDocument();
	});
});
