import { createGlobalStyle, CSSObject } from 'styled-components';
import { TRawApplicationProps } from '../application.model';
import { TTheme, TFunctionalTheme, MakeFunctionalTheme } from 'ex-platform/src/utils/theme.utils';
import { TRawButtonProps } from 'ex-platform/src/components/button/button.model';
import { TApplicationProps } from '../application.component';

const container: TFunctionalTheme<TRawApplicationProps> = {
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
};

const input: TFunctionalTheme<TRawApplicationProps> = {
	fontFamily: 'Helvetica',
	fontWeight: 'bold',
	fontSize: '1.8rem',
	background: 'green',
	width: '400px',
};

const text: TTheme = {
	fontFamily: 'Helvetica',
	color: 'black',
};

const button: MakeFunctionalTheme<TRawButtonProps, TRawApplicationProps> = {
	container: {
		display: 'flex',
		width: () => '20px',
		height: () => '20px',
		background: (props: TRawApplicationProps) => props.color,
	},
	content: {},
	icon: {
		color: () => '',
	},
};

export const theme: MakeFunctionalTheme<TRawApplicationProps> = {
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
