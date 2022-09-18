import { FunctionComponent, ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter, useLocation } from 'react-router-dom';

type WrapperPropsT = {
	children: ReactNode;
};

const LocationDisplay = () => {
	const location = useLocation();

	return <div data-testid='location-display'>{location.pathname}</div>;
};

const Wrapper = ({ children }: WrapperPropsT) => (
	<BrowserRouter>
		{children}
		<LocationDisplay />
	</BrowserRouter>
);

const insertAWrapper = (ui: ReactElement, route = '/') => {
	window.history.pushState({}, 'Test Page', route);
	return render(ui, { wrapper: Wrapper as FunctionComponent });
};

export default insertAWrapper;
