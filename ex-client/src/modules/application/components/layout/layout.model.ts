import { MakeTheme, TTheme } from 'ex-platform/dist/utils/theme.utils';

export type TRawLayoutProps = {
	name?: string;
	theme: MakeTheme<'container' | 'content', TTheme>;
};
