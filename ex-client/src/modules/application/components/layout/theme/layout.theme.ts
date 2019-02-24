import { CSSObject } from 'styled-components';

export type TLayoutTheme = {
	container: CSSObject;
	wrapper: CSSObject;
};

const container = {
	widht: '100%',
};

const wrapper = {
	fontFamily: 'Helvetica',
};

export const theme: TLayoutTheme = {
	container,
	wrapper,
};
