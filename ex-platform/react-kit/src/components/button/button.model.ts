import { ReactElement, EventHandler, MouseEvent } from 'react';
import { MakeTheme, TTheme } from '../../utils/theme.utils';

export type TRawButtonProps = {
	theme: MakeTheme<'container' | 'content' | 'icon', TTheme>;
	disabled?: boolean;
	onClick?: EventHandler<MouseEvent<HTMLElement>>;
	onDoubleClick?: EventHandler<MouseEvent<HTMLElement>>;
	icon: ReactElement;
	count: number;
};

export type TButtonState = {};
