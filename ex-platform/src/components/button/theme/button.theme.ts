import { TRawButtonProps } from '../button.model';
import { TTheme } from '../../../utils/with-theme.utils';
import { MakeTheme } from '../../../utils/theme.utils';

const container: TTheme<TRawButtonProps> = {
	display: 'flex',
	color: 'green',
	fontSize: () => `20px`,
};

export type MakeFunctionalTheme<S extends object, P extends object> = {
	[Key in keyof S]?: string | number | ((props: P) => string | number)
};

export type TButtonTheme<P extends TRawButtonProps> = {
	container: MakeTheme<'container', P['theme']>;
};

export const theme: TButtonTheme<TRawButtonProps> = {
	container,
};

console.log(theme.container);
