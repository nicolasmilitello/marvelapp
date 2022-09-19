import React from 'react';
import { render, screen } from '@testing-library/react';

//* components
import Button from '../button';

//* mocks
import { mockcomics } from '../../../mocks/mock-comics';

describe('<Button />', () => {
	const renderButton = (selected: boolean, disabled: boolean) => {
		render(
			<Button
				id={`${mockcomics.data.results[0].id}`}
				content='Testing button'
				selected={selected}
				disabled={disabled}
				eventHandler={null}
			/>
		);
	};

	it('should render a button with the text passed by parameter', () => {
		renderButton(false, false);

		expect(
			screen.getByRole('button', { name: /testing button/i })
		).toBeInTheDocument();
	});

	it('should render an enabled button if it receives by props disabled false', async () => {
		renderButton(false, false);

		const button = await screen.findByRole('button', {
			name: /testing button/i,
		});

		expect(button).toHaveClass('btn');
		expect(button).not.toHaveClass('btn-disabled');
	});

	it('should render a disabled button if it receives by props disabled true', async () => {
		renderButton(false, true);

		const button = await screen.findByRole('button', {
			name: /testing button/i,
		});

		expect(button).toHaveClass('btn btn-disabled');
	});

	it('should render a not selected button if it receives by props selected false', async () => {
		renderButton(false, false);

		const button = await screen.findByRole('button', {
			name: /testing button/i,
		});

		expect(button).toHaveClass('btn');
		expect(button).not.toHaveClass('btn-selected');
	});

	it('should render a selected button if it receives by props selected true', async () => {
		renderButton(true, false);

		const button = await screen.findByRole('button', {
			name: /testing button/i,
		});

		expect(button).toHaveClass('btn btn-selected');
	});
});
