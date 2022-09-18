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
	default: () => ({ data: mockcharacters, error: undefined, loading: false }),
}));

describe('<CharacterPage />', () => {
	const renderComponent = async () => {
		await act(async () => {
			insertAWrapper(
				<AppProvider>
					<CharacterPage />
				</AppProvider>
			);
		});
	};

	it('should render <Card /> components', async () => {
		await renderComponent();

		expect(await screen.findAllByRole('link')).toHaveLength(12);
		expect(screen.getByText(/3-D Man/i)).toBeInTheDocument();
		expect(screen.getByText(/Aaron Stack/i)).toBeInTheDocument();
		expect(screen.getByText(/A.I.M./i)).toBeInTheDocument();
	});

	it('should render a <Footer /> component', async () => {
		await renderComponent();

		expect(screen.getByTestId('footer-component')).toBeInTheDocument();
	});
});
