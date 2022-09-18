import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

//* components
import Card from '../card';

//* mocks
import { comicsMock } from '../../../mocks/comics-mock';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<Card />', () => {
	it('should render a title', () => {
		insertAWrapper(
			<Card
				id={comicsMock.data.results[0].id}
				imgUrl={`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`}
				name={comicsMock.data.results[0].title}
				type='comics'
				element={comicsMock.data.results[0]}
			/>
		);

		expect(
			screen.getByText(comicsMock.data.results[0].title)
		).toBeInTheDocument();
	});

	it('should render an image', () => {
		insertAWrapper(
			<Card
				id={comicsMock.data.results[0].id}
				imgUrl={`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`}
				name={comicsMock.data.results[0].title}
				type='comics'
				element={comicsMock.data.results[0]}
			/>
		);

		expect(screen.getAllByRole('img')).toHaveLength(1);
	});

	it('should render the image passed by props', () => {
		insertAWrapper(
			<Card
				id={comicsMock.data.results[0].id}
				imgUrl={`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`}
				name={comicsMock.data.results[0].title}
				type='comics'
				element={comicsMock.data.results[0]}
			/>
		);

		expect(screen.getAllByRole('img')[0].getAttribute('src')).toMatch(
			`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`
		);

		expect(screen.getAllByRole('img')[0].getAttribute('alt')).toMatch(
			`${comicsMock.data.results[0].title}`
		);
	});

	it('should redirect to the details page of that comic after clicking on it', async () => {
		const user = userEvent.setup();

		const { container } = insertAWrapper(
			<Card
				id={comicsMock.data.results[0].id}
				imgUrl={`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`}
				name={comicsMock.data.results[0].title}
				type='comics'
				element={comicsMock.data.results[0]}
			/>
		);

		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const card = container.getElementsByClassName('cardContainer')[0];

		await user.click(card);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/comics/${comicsMock.data.results[0].id}`
		);
	});

	it('should render a button to bookmark a resource', () => {
		insertAWrapper(
			<Card
				id={comicsMock.data.results[0].id}
				imgUrl={`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`}
				name={comicsMock.data.results[0].title}
				type='comics'
				element={comicsMock.data.results[0]}
			/>
		);
		expect(
			screen.getByRole('button', { name: 'ADD FAVORITE ❤️' })
		).toBeInTheDocument();
	});

	it('should render a button to hide resource', () => {
		insertAWrapper(
			<Card
				id={comicsMock.data.results[0].id}
				imgUrl={`${comicsMock.data.results[0].thumbnail.path}.${comicsMock.data.results[0].thumbnail.extension}`}
				name={comicsMock.data.results[0].title}
				type='comics'
				element={comicsMock.data.results[0]}
			/>
		);

		expect(
			screen.getByRole('button', { name: 'HIDE 🚫' })
		).toBeInTheDocument();
	});
});
