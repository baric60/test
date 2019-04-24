import { TRawButtonProps } from '../button.model';
import { TButtonProps } from '../button.component';
import { MakeFunctionalTheme } from '../../../utils/theme.utils';

export type TFunctionalButtonTheme = MakeFunctionalTheme<
	'container' | 'content',
	TRawButtonProps['theme'],
	TButtonProps
>;

const container: TFunctionalButtonTheme['container'] = {
	display: 'flex',
	background: props => (props.disabled ? 'red' : 'green'),
};

const content: TFunctionalButtonTheme['content'] = {
	color: props => (props.disabled ? 'white' : 'black'),
	fontSize: () => `20px`,
};

export const theme: TFunctionalButtonTheme = {
	container,
	content,
};
