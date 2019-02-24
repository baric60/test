import { CSSObject } from 'styled-components';

export type TApplicationTheme = {
	container: CSSObject;
	input: CSSObject;
	text: CSSObject;
};

const container: CSSObject = {
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
};

const input: CSSObject = {
	fontFamily: 'Helvetica',
	fontWeight: 'bold',
	fontSize: '1.8rem',
	background: 'green',
	width: '400px',
};

const text: CSSObject = {
	fontFamily: 'Helvetica',
	color: 'black',
};

export const theme: TApplicationTheme = {
	container,
	input,
	text,
};
