import { MakeTheme, TTheme } from 'ex-platform/src/utils/theme.utils';
import { TRawButtonProps } from 'ex-platform/src/components/button/button.model';

export type TRawApplicationProps = {
	color: string;
	theme: MakeTheme<'container' | 'contnet' | 'input' | 'text', TTheme> &
		MakeTheme<'button', TRawButtonProps['theme']>;
};

export type TApplicationState = {
	value: string;
};
