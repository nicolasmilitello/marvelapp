import React from 'react';

//* styles
import './footer.styles.scss';

function Footer() {
	return (
		<footer data-testid='footer-component'>
			<p>Data provided by Marvel. © 2022 MARVEL</p>
		</footer>
	);
}

export default React.memo(Footer);
