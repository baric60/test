import { MakeTheme, TTheme } from 'ex-platform/dist/utils/theme.utils';
import { TRawButtonProps } from 'ex-platform/dist/components/button/button.model';

export type TRawApplicationProps = {
	name: string;
	color: string;
	theme: MakeTheme<'container' | 'contnet' | 'input' | 'text', TTheme> &
		MakeTheme<'button', TRawButtonProps['theme']>;
};

export type TApplicationState = {
	value: string;
};
