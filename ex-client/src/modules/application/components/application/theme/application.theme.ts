import { createGlobalStyle } from 'styled-components';
import { TRawApplicationProps } from '../application.model';
import { MakeFunctionalTheme, TFunctionalTheme } from 'ex-platform/react-kit/src/utils/theme.utils';
import { TRawButtonProps } from 'ex-platform/react-kit/src/components/button/button.model';
import { TApplicationProps } from '../application.component';

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
		width: () => '20px',
		height: () => '20px',
	},
	content: {},
	icon: {
		color: props => props.color,
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
