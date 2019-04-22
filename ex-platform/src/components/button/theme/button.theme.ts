import { TRawButtonProps } from '../button.model';
import { TTheme } from '../../../utils/with-theme.utils';

const container: TTheme<TRawButtonProps> = {
	display: 'flex',
	color: 'green',
	fontSize: () => `20px`,
};

export const theme: TTheme<TRawButtonProps> = {
	container,
};
