import { TRawButtonProps } from '../button.model';
import { TFunctionalTheme } from '../../../utils/theme.utils';

const container: TFunctionalTheme<TRawButtonProps> = {
	display: 'flex',
};

const content: TFunctionalTheme<TRawButtonProps> = {
	color: 'green',
	fontSize: () => `20px`,
};

export const theme = {
	container,
	content,
};
