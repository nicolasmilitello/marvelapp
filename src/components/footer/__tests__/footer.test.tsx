import { render, screen } from '@testing-library/react';
import Footer from '../footer';

describe('<Home/>', () => {
	it('should have some text', () => {
		render(<Footer />);

		const text = screen.getByText(
			/Data provided by Marvel. © 2022 MARVEL/i
		);
		expect(text).toBeInTheDocument();
	});
});
