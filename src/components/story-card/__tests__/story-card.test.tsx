import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';

//* components
import StoryCard from '../story-card';

//* mocks
import { storiesMock } from '../../../mocks/stories-mock';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<StoryCard />', () => {
	it('should render a title', () => {
		insertAWrapper(
			<StoryCard
				id={storiesMock.data.results[0].id}
				name={storiesMock.data.results[0].title}
				type='stories'
				element={storiesMock.data.results[0]}
			/>
		);

		expect(
			screen.getByText(storiesMock.data.results[0].title)
		).toBeInTheDocument();
	});

	it('should render a marvel logo image', () => {
		insertAWrapper(
			<StoryCard
				id={storiesMock.data.results[0].id}
				name={storiesMock.data.results[0].title}
				type='stories'
				element={storiesMock.data.results[0]}
			/>
		);

		expect(screen.getAllByRole('img')).toHaveLength(1);
		expect(screen.getByAltText(/logo_marvel/i)).toBeInTheDocument();
	});

	it('should redirect to the details page of that comic after clicking on it', async () => {
		const user = userEvent.setup();

		const { container } = insertAWrapper(
			<StoryCard
				id={storiesMock.data.results[0].id}
				name={storiesMock.data.results[0].title}
				type='stories'
				element={storiesMock.data.results[0]}
			/>
		);

		// eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
		const card = container.getElementsByClassName('storyCardContainer')[0];

		await user.click(card);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/stories/${storiesMock.data.results[0].id}`
		);
	});

	it('should render a button to bookmark a resource', () => {
		insertAWrapper(
			<StoryCard
				id={storiesMock.data.results[0].id}
				name={storiesMock.data.results[0].title}
				type='stories'
				element={storiesMock.data.results[0]}
			/>
		);
		expect(
			screen.getByRole('button', { name: 'ADD FAVORITE ❤️' })
		).toBeInTheDocument();
	});

	it('should render a button to hide resource', () => {
		insertAWrapper(
			<StoryCard
				id={storiesMock.data.results[0].id}
				name={storiesMock.data.results[0].title}
				type='stories'
				element={storiesMock.data.results[0]}
			/>
		);

		expect(
			screen.getByRole('button', { name: 'HIDE 🚫' })
		).toBeInTheDocument();
	});
});
