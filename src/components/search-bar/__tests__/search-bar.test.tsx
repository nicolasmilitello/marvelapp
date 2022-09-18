import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';

//* components
import SearchBar from '../search-bar';

//* mocks
import { mockedParams } from '../../../mocks/params-mock';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked functions and hooks
const setCurrentPageMocked = jest.fn();

const handleParamsMocked = jest.fn();

jest.mock('../../../hooks/useDebounce', () => {
	return () => setTimeout(() => 'spider', 1000);
});

describe('<SearchBar />', () => {
	beforeEach(() => {
		insertAWrapper(
			<SearchBar
				setCurrentPage={setCurrentPageMocked}
				params={mockedParams}
				handleParams={handleParamsMocked}
				placeholder={'Search by character name'}
			/>
		);
	});

	it('should render an input element', async () => {
		expect(screen.getByRole('textbox')).toBeInTheDocument();
	});

	it('should display the placeholder passed by props', async () => {
		expect(
			screen.getByPlaceholderText('Search by character name')
		).toBeInTheDocument();
	});

	it('should display the search typed by the user', async () => {
		const user = userEvent.setup();

		const searchFilter = screen.getByPlaceholderText(/search by/i);
		await act(async () => {
			await user.type(searchFilter, 'spider');
		});

		expect(screen.getByDisplayValue(/spider/i)).toBeTruthy();
	});

	it('should call the handle params function when user typed some word', async () => {
		const user = userEvent.setup();

		const searchFilter = screen.getByPlaceholderText(/search by/i);
		await user.type(searchFilter, 'spider');

		expect(handleParamsMocked).toHaveBeenCalled();
	});

	it('should call the pagination function when user typed some word to set the current page to zero', async () => {
		const user = userEvent.setup();

		const searchFilter = screen.getByPlaceholderText(/search by/i);
		await user.type(searchFilter, 'spider');

		expect(setCurrentPageMocked).toHaveBeenCalled();
	});
});
