import { createGlobalStyle, CSSObject } from 'styled-components';
import { TRawApplicationProps } from '../application.model';
import { TTheme } from 'ex-platform/src/utils/with-theme.utils';

export type TApplicationTheme = {
	container: CSSObject;
	input: CSSObject;
	text: CSSObject;
	button: TTheme<TRawApplicationProps>;
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

const text = {
	fontFamily: 'Helvetica',
	color: 'black',
};

const button: TTheme<TRawApplicationProps> = {
	container: {
		display: 'block',
		color: 'red',
		background: (props: TRawApplicationProps) => {
			console.log(props);
			return props.color;
		},
	},
};

export const theme: TApplicationTheme = {
	container,
	input,
	text,
	button,
};

export const GlobalStyle = createGlobalStyle`
body {
  color: red
}
`;
