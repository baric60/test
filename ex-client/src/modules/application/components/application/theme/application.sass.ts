import { CSSObject } from 'styled-components';

export type TApplicationTheme = {
	container: CSSObject;
	wrapper: CSSObject;
};
const container = {
	'font-family': 'Helvetica',
	'font-weight': 'bold',
	'font-size': '1.8rem',
};

const wrapper = {
	'font-family': 'Helvetica',
	'font-weight': 'bold',
	'font-size': '1.8rem',
};

export const theme: TApplicationTheme = {
	container,
	wrapper,
};
