import { TRawButtonProps } from '../button.model';
import { TFunctionalTheme, MakeFunctionalTheme } from '../../../utils/theme.utils';

const container: TFunctionalTheme<TRawButtonProps> = {
	display: 'flex',
	background: props => (props.disabled ? 'red' : 'green'),
};

const content: TFunctionalTheme<TRawButtonProps> = {
	color: props => (props.disabled ? 'white' : 'black'),
	fontSize: () => `20px`,
};

export const theme: MakeFunctionalTheme<TRawButtonProps> = {
	container,
	content,
};
