import React from 'react';
import { Route, Routes } from 'react-router-dom';

//* views
import {
	BookmarksPage,
	CharacterPage,
	ComicsPage,
	DetailsPage,
	Home,
	NotFoundPage,
	StoriesPage,
} from '../views';
import HiddenResourcesPage from '../views/hidden-resources-page/hidden-resources-page';

export default function Routing(): JSX.Element {
	enum paths {
		home = '/',
		bookmarks = '/bookmarks',
		hiddenResources = '/hidden-resources',
		characters = '/characters',
		comics = '/comics',
		stories = '/stories',
		general = '',
		details = ':id',
		notFound = '*',
	}

	return (
		<div>
			<Routes>
				<Route element={<Home />} path={paths.home} />

				<Route path={paths.characters}>
					<Route element={<CharacterPage />} path={paths.general} />

					<Route
						element={<DetailsPage type='characters' />}
						path={paths.details}
					/>
				</Route>

				<Route path={paths.comics}>
					<Route element={<ComicsPage />} path={paths.general} />

					<Route
						element={<DetailsPage type='comics' />}
						path={paths.details}
					/>
				</Route>

				<Route path={paths.stories}>
					<Route element={<StoriesPage />} path={paths.general} />

					<Route
						element={<DetailsPage type='stories' />}
						path={paths.details}
					/>
				</Route>

				<Route element={<BookmarksPage />} path={paths.bookmarks} />

				<Route
					element={<HiddenResourcesPage />}
					path={paths.hiddenResources}
				/>

				<Route element={<NotFoundPage />} path={paths.notFound} />
			</Routes>
		</div>
	);
}
