import { CSSObject } from 'styled-components';

export type TLayoutTheme = {
	container: CSSObject;
	wrapper: CSSObject;
};
const container = {
	'font-size': '1.8rem',
};

const wrapper = {
	'font-family': 'Helvetica',
};

export const theme: TLayoutTheme = {
	container,
	wrapper,
};
