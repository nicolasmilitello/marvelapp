import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

//* components
import App from '../../../App';

//* utils
import insertAWrapper from '../../../utils/test-utils/insert-a-wrapper';

describe('<NavBar />', () => {
	beforeEach(() => {
		insertAWrapper(<App />);
	});

	it('should redirect to characters page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const charactersPageLink = screen.getByTestId('characters-link');
		await user.click(charactersPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/characters`
		);

		expect(screen.getByTestId('characters-page')).toBeInTheDocument();
	});

	it('should redirect to comics page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const comicsPageLink = screen.getByTestId('comics-link');
		await user.click(comicsPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/comics`
		);

		expect(screen.getByTestId('comics-page')).toBeInTheDocument();
	});

	it('should redirect to stories page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const storiesPageLink = screen.getByTestId('stories-link');
		await user.click(storiesPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/stories`
		);

		expect(screen.getByTestId('stories-page')).toBeInTheDocument();
	});

	it('should redirect to bookmarks page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const bookmarksPageLink = screen.getByTestId('bookmarks-link');
		await user.click(bookmarksPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/bookmarks`
		);

		expect(screen.getByTestId('bookmarks-page')).toBeInTheDocument();
	});

	it('should redirect to hidden resources page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const hiddenResourcesPageLink = screen.getByTestId(
			'hiddenResources-link'
		);
		await user.click(hiddenResourcesPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/hidden-resources`
		);

		expect(screen.getByTestId('hiddenResources-page')).toBeInTheDocument();
	});

	it('should redirect to home page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const hiddenResourcesPageLink = screen.getByTestId(
			'hiddenResources-link'
		);
		await user.click(hiddenResourcesPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/hidden-resources`
		);

		expect(screen.getByTestId('hiddenResources-page')).toBeInTheDocument();

		const homePageLink = screen.getByTestId('home-link');
		await user.click(homePageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(`/`);

		expect(screen.getByTestId('home-page')).toBeInTheDocument();
	});

	it('should have a logo which can be clicked and it will redirect to user to home page', async () => {
		const user = userEvent.setup();

		expect(screen.getByTestId('home-page')).toBeInTheDocument();

		const hiddenResourcesPageLink = screen.getByTestId(
			'hiddenResources-link'
		);
		await user.click(hiddenResourcesPageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent(
			`/hidden-resources`
		);

		expect(screen.getByTestId('hiddenResources-page')).toBeInTheDocument();

		const logoHomePageLink = screen.getByTestId('logoHome-link');
		await user.click(logoHomePageLink);

		expect(screen.getByTestId('location-display')).toHaveTextContent('/');

		expect(screen.getByTestId('home-page')).toBeInTheDocument();
	});
});
