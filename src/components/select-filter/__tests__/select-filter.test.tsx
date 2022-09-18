import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';

//* components

//* constants
import { filtersComicsPage } from '../../../constants/filters-comics-page';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';
import SelectFilter from '../select-filter';
import { optionsSuggestSelect } from '../../../mocks/options-suggest-select';

// mocked functions and hooks
const setCurrentPageMocked = jest.fn();

const handleParamsMocked = jest.fn();

describe('<Select />', () => {
	beforeEach(() => {
		insertAWrapper(
			<SelectFilter
				setCurrentPage={setCurrentPageMocked}
				params={filtersComicsPage}
				handleParams={handleParamsMocked}
				options={optionsSuggestSelect}
				title='Filter by character'
				type='characters'
			/>
		);
	});

	it('should display the placeholder passed by props', async () => {
		expect(
			screen.getByPlaceholderText('Filter by character')
		).toBeInTheDocument();
	});

	it('should reset the input when the user clicks on the \'x\' button', async () => {
		const user = userEvent.setup();

		const selectFilter = screen.getByPlaceholderText('Filter by character');
		await act(async () => {
			await user.type(selectFilter, 'Option 2');
		});

		expect(screen.getByPlaceholderText('Filter by character')).toHaveValue('Option 2');
		
		const deleteButton = screen.getByRole('button', { name: /x/i });
		await act(async () => {
			await user.click(deleteButton);
		});

		expect(screen.getByPlaceholderText('Filter by character')).toHaveValue('');
	});
});
