import { MakeTheme, TTheme } from 'ex-platform/react-kit/src/utils/theme.utils';

export type TRawLayoutProps = {
	name?: string;
	theme: MakeTheme<'container' | 'content', TTheme>;
};
