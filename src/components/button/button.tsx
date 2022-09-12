import React, { MouseEventHandler, useEffect, useRef } from 'react';

//* styles
import './button.styles.scss';

interface ButtonProps {
	content: string;
	eventHandler: MouseEventHandler<HTMLButtonElement> | null;
	id?: string;
	selected: boolean;
	disabled: boolean;
}

export default function Button({
	content,
	eventHandler,
	id,
	selected,
	disabled,
}: ButtonProps): JSX.Element {
	const buttonRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		if (selected) {
			buttonRef.current?.classList.add('btn-selected');
		} else {
			buttonRef.current?.classList.remove('btn-selected');
		}

		if (disabled) {
			buttonRef.current?.classList.add('btn-disabled');
		} else {
			buttonRef.current?.classList.remove('btn-disabled');
		}
	}, [selected, disabled]);

	return (
		<button
			ref={buttonRef}
			className='btn'
			id={id}
			onClick={eventHandler ? eventHandler : undefined}
		>
			{content}
		</button>
	);
}
