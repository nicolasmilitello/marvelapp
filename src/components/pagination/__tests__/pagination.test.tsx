import React from 'react';
import userEvent from '@testing-library/user-event';
import { act, render, screen, waitFor } from '@testing-library/react';

//* components
import Pagination from '../pagination';

//* mocks
import { mockedParams } from '../../../mocks/params-mock';

// mocked functions
const mockedHandleParams = jest.fn();
const mockedSetCurrentPage = jest.fn();

const renderPagination = (currentPage: number) => {
	render(
		<Pagination
			params={mockedParams}
			handleParams={mockedHandleParams}
			currentPage={currentPage}
			setCurrentPage={mockedSetCurrentPage}
			cardsPerPage={12}
			totalCards={120}
		/>
	);
};

describe('<Pagination />', () => {
	it('should render a button to next page', () => {
		renderPagination(1);
		expect(screen.getByText(/>/i)).toBeInTheDocument();
	});

	it('should render a button to previuos page', () => {
		renderPagination(1);
		expect(screen.getByText(/</i)).toBeInTheDocument();
	});

	it('should render a disabled button to previuos page if the current page is the first one', () => {
		renderPagination(1);

		expect(screen.getByText(/</i)).toHaveClass('btn-disabled');
	});

	it('should render a disabled button to next page if the current page is the last one', () => {
		renderPagination(10);

		expect(screen.getByText(/>/i)).toHaveClass('btn-disabled');
	});

	it('should render three buttons with the page numbers around the number of the current page', () => {
		renderPagination(1);

		expect(screen.getByRole('button', { name: /1/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /2/i })).toBeInTheDocument();
		expect(screen.getByRole('button', { name: /3/i })).toBeInTheDocument();
	});

	it('should render a button for first page as a selected button and two as not selected buttons', () => {
		renderPagination(1);

		expect(screen.getByRole('button', { name: /1/i })).toHaveClass(
			'btn btn-selected'
		);
		expect(screen.getByRole('button', { name: /2/i })).not.toHaveClass(
			'btn btn-selected'
		);
		expect(screen.getByRole('button', { name: /3/i })).not.toHaveClass(
			'btn btn-selected'
		);
	});

	it('should render a text with the total number of pages', () => {
		renderPagination(1);

		expect(screen.getByText(/... of 10 pages/i)).toBeInTheDocument();
	});

	it('should not call the the setCurrentPage function when the user clicks on the button of the current page', async () => {
		const user = userEvent.setup();
		renderPagination(1);

		await user.click(screen.getByRole('button', { name: /1/i }));
		expect(mockedSetCurrentPage).not.toHaveBeenCalled();
	});

	it('should call the setCurrentPage and the handleParams functions when the user clicks on the button of the current page', async () => {
		const user = userEvent.setup();
		renderPagination(1);

		await user.click(screen.getByRole('button', { name: /2/i }));
		expect(mockedSetCurrentPage).toHaveBeenCalled();
		expect(mockedHandleParams).toHaveBeenCalled();
	});

	it('should call the setCurrentPage and the handleParams functions when the user clicks on the next page button', async () => {
		const user = userEvent.setup();
		renderPagination(1);

		await user.click(screen.getByRole('button', { name: />/i }));
		expect(mockedSetCurrentPage).toHaveBeenCalled();
		expect(mockedHandleParams).toHaveBeenCalled();
	});

	it('should not call the setCurrentPage and handleParams functions when the user clicks on the next page button if the current page is the last one', async () => {
		const user = userEvent.setup();
		renderPagination(10);

		await user.click(screen.getByRole('button', { name: />/i }));
		expect(mockedSetCurrentPage).not.toHaveBeenCalled();
		expect(mockedHandleParams).not.toHaveBeenCalled();
	});

	it('should change the page number buttons if it is needed when next page button is clicked', async () => {
		const user = userEvent.setup();

		renderPagination(3);

		await act(async () => {
			await user.click(screen.getByRole('button', { name: />/i }));
		});

		const fourthPageButton = await waitFor(() => {
			return screen.getByRole('button', { name: /4/i });
		});

		const fifthPageButton = await waitFor(() => {
			return screen.getByRole('button', { name: /5/i });
		});

		const sixthPageButton = await waitFor(() => {
			return screen.getByRole('button', { name: /6/i });
		});

		expect(fourthPageButton).toBeInTheDocument();
		expect(fifthPageButton).toBeInTheDocument();
		expect(sixthPageButton).toBeInTheDocument();
	});

	it('should not call the setCurrentPage and handleParams functions when the user clicks on the previous page button if the current page is the first one', async () => {
		const user = userEvent.setup();
		renderPagination(1);

		await user.click(screen.getByRole('button', { name: /</i }));
		expect(mockedSetCurrentPage).not.toHaveBeenCalled();
		expect(mockedHandleParams).not.toHaveBeenCalled();
	});

	it('should change the page number buttons if it is needed when previous page button is clicked', async () => {
		const user = userEvent.setup();

		const initialState = 6;

		const setStateMock = jest.fn();
		React.useState = jest
			.fn()
			.mockReturnValue([initialState, setStateMock]);

		renderPagination(4);

		await act(async () => {
			await user.click(screen.getByRole('button', { name: /</i }));
		});

		await waitFor(() => {
			expect(setStateMock).toHaveBeenCalledTimes(2);
		});
	});
});
