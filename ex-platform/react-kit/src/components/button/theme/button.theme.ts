import { TButtonProps } from '../button.component';
import { MakeFunctionalTheme } from '../../../utils/theme.utils';

export type TFunctionalButtonTheme = MakeFunctionalTheme<
	'container' | 'content',
	TButtonProps & { theme: any },
	TButtonProps
>;

const container: TFunctionalButtonTheme['container'] = {
	display: 'flex',
	padding: '10px',
	background: props => {
		console.log(props);
		return props.disabled ? 'red' : 'green';
	},
};

const content: TFunctionalButtonTheme['content'] = {
	color: props => {
		console.log(props);
		return props.disabled ? 'white' : 'black';
	},
	fontSize: () => `20px`,
};

export const theme: TFunctionalButtonTheme = {
	container,
	content,
};
