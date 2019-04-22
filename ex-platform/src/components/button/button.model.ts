import { ReactElement, EventHandler, MouseEvent } from 'react';
import { CSSObject } from 'styled-components';

export type TRawButtonProps = {
	theme: {
		container: CSSObject;
	};
	disabled?: boolean;
	onClick?: EventHandler<MouseEvent<HTMLDivElement>>;
	onDoubleClick?: EventHandler<MouseEvent<HTMLDivElement>>;
	icon?: ReactElement;
	count: number;
};

export type TButtonState = {};
