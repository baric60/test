import { MakeFunctionalTheme } from 'ex-platform/dist/utils/theme.utils';
import { TRawLayoutProps, TLayoutProps } from '../layout.component';

export type TLayoutTheme = MakeFunctionalTheme<'container' | 'content', TRawLayoutProps['theme'], TLayoutProps>;

const container = {
	display: 'flex',
	widht: '100%',
};

const content = {
	fontFamily: 'Helvetica',
};

export const theme: TLayoutTheme = {
	container,
	content,
};
