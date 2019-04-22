import { TApplicationTheme } from './theme/application.theme';

export type TRawApplicationProps = {
	color: string;
	theme?: TApplicationTheme;
};

export type TApplicationState = {
	value: string;
};
