import { createGlobalStyle } from 'styled-components';
import { TRawApplicationProps } from '../application.model';
import { MakeFunctionalTheme, TFunctionalTheme } from 'ex-platform/dist/utils/theme.utils';
import { TRawButtonProps } from 'ex-platform/dist/components/button/button.model';
import { TApplicationProps } from '../application.component';
import console = require('console');

type TFunctionalApplicationTheme = MakeFunctionalTheme<
	'container' | 'input' | 'text',
	TRawApplicationProps['theme'],
	TApplicationProps
> &
	MakeFunctionalTheme<'button', TRawButtonProps['theme'], TApplicationProps>;

const container = {
	display: 'flex',
	flexWrap: 'wrap',
	width: '100%',
};

const input = {
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

const button: TFunctionalApplicationTheme['button'] = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: () => '300px',
		height: () => '20px',
		alignItems: 'center',
	},
	content: {},
	icon: {
		color: 'red',
	},
};

export const theme: TFunctionalApplicationTheme = {
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
