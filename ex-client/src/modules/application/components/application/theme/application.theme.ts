import { DinamicTheme } from 'ex-platform/dist/utils/theme.utils';
import { TRawApplicationProps } from '../application.component';

export const theme: DinamicTheme<TRawApplicationProps> = {
	container: {
		display: 'flex',
		flexWrap: 'wrap',
		width: '100%',
	},
	input: {
		fontFamily: 'Helvetica',
		fontWeight: 'bold',
		fontSize: '1.8rem',
		background: 'green',
		width: '400px',
	},
	text: {
		fontFamily: 'Helvetica',
		color: 'black',
	},
	button: {
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
	},
};
