import { DinamicTheme } from 'ex-platform/dist/utils/theme.utils';
import { TRawLayoutProps } from "../layout.component";

export const theme: DinamicTheme<TRawLayoutProps> = {
	container: {
		display: 'flex',
		widht: '100%',
	},
	content: {
		fontFamily: 'Helvetica',
	},
};
