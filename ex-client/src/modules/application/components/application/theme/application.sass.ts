import { CSSObject } from 'styled-components';

export type TApplicationTheme = {
	block: CSSObject;
	input: CSSObject;
};
const block = {
	width: '100%',
	height: '20px',
	background: 'red',
};

const input = {
	'font-family': 'Helvetica',
	'font-weight': 'bold',
	'font-size': '1.8rem',
	background: 'green',
};

export const theme: TApplicationTheme = {
	block,
	input,
};
