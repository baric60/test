import { TRawButtonProps } from '../button.component';
import { DinamicTheme } from '../../../utils/theme.utils';

export const theme: DinamicTheme<TRawButtonProps> = {
	container: {
		display: 'flex',
		padding: '10px',
		background: props => props.disabled ? 'red' : 'green',
	},
	content: {
		color: props => props.disabled ? 'white' : 'black',
		fontSize: () => `20px`,
	},
};
