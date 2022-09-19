import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

//* components
import Card from '../card';

//* mocks
import { mockcomics } from '../../../mocks/mock-comics';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<Card />', () => {
	it('should render a title', () => {
		insertAWrapper(
			<Card
				id={mockcomics.data.results[0].id}
				imgUrl={`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`}
				name={mockcomics.data.results[0].title}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);

		expect(
			screen.getByText(mockcomics.data.results[0].title)
		).toBeInTheDocument();
	});

	it('should render an image', () => {
		insertAWrapper(
			<Card
				id={mockcomics.data.results[0].id}
				imgUrl={`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`}
				name={mockcomics.data.results[0].title}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);

		expect(screen.getAllByRole('img')).toHaveLength(1);
	});

	it('should render the image passed by props', () => {
		insertAWrapper(
			<Card
				id={mockcomics.data.results[0].id}
				imgUrl={`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`}
				name={mockcomics.data.results[0].title}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);

		expect(screen.getAllByRole('img')[0].getAttribute('src')).toMatch(
			`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`
		);

		expect(screen.getAllByRole('img')[0].getAttribute('alt')).toMatch(
			`${mockcomics.data.results[0].title}`
		);
	});

	it('should redirect to the details page of that comic after clicking on it', async () => {
		const user = userEvent.setup();

		const { container } = insertAWrapper(
			<Card
				id={mockcomics.data.results[0].id}
				imgUrl={`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`}
				name={mockcomics.data.results[0].title}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);

		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const card = container.getElementsByClassName('cardContainer')[0];

		await user.click(card);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/comics/${mockcomics.data.results[0].id}`
		);
	});

	it('should render a button to bookmark a resource', () => {
		insertAWrapper(
			<Card
				id={mockcomics.data.results[0].id}
				imgUrl={`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`}
				name={mockcomics.data.results[0].title}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);
		expect(
			screen.getByRole('button', { name: 'ADD FAVORITE ❤️' })
		).toBeInTheDocument();
	});

	it('should render a button to hide resource', () => {
		insertAWrapper(
			<Card
				id={mockcomics.data.results[0].id}
				imgUrl={`${mockcomics.data.results[0].thumbnail.path}.${mockcomics.data.results[0].thumbnail.extension}`}
				name={mockcomics.data.results[0].title}
				type='comics'
				element={mockcomics.data.results[0]}
			/>
		);

		expect(
			screen.getByRole('button', { name: 'HIDE 🚫' })
		).toBeInTheDocument();
	});
});
