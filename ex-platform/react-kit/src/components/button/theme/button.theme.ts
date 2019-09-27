import { TRawButtonProps } from '../button.component';
import { DinamicTheme } from '../../../utils/theme.utils';

export const theme: DinamicTheme<TRawButtonProps> = {
	container: {
		display: 'flex',
		padding: '10px',
		background: props => (props ? 'red' : 'green'),
	},
	content: {
		color: props => (props ? 'white' : 'black'),
		fontSize: () => `20px`,
	},
};
