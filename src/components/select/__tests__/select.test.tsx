import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';

//* components
import Select from '../select';

//* constants
import { filtersComicsPage } from '../../../constants/filters-comics-page';
import { formatSelectOptions } from '../../../constants/format-select-options';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

// mocked functions and hooks
const setCurrentPageMocked = jest.fn();

const handleParamsMocked = jest.fn();

describe('<Select />', () => {
	beforeEach(() => {
		insertAWrapper(
			<Select
				setCurrentPage={setCurrentPageMocked}
				params={filtersComicsPage}
				handleParams={handleParamsMocked}
				options={formatSelectOptions}
				placeholder={'Search by format'}
			/>
		);
	});

	it('should render a select element', async () => {
		expect(screen.getByTestId('select-element')).toBeInTheDocument();
	});

	it('should display the placeholder passed by props', async () => {
		expect(
			screen.getByPlaceholderText('Search by format')
		).toBeInTheDocument();
	});

	it('should call the handleParams and setCurrentPage functions when user typed some word', async () => {
		const user = userEvent.setup();

		await act(async () => {
			await user.selectOptions(
				screen.getByRole('combobox'),
				screen.getByRole('option', {name: 'Magazine'}),
			)
		})

		expect(setCurrentPageMocked).toHaveBeenCalled();
		expect(handleParamsMocked).toHaveBeenCalled();

	});
});
