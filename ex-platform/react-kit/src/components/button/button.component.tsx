import * as React from 'react';
import { Component, ReactElement, EventHandler, MouseEvent } from 'react';
import { theme } from './theme/button.theme';
import { customWithDefaults } from '../../utils/with-defaults.utils';
import { withTheme } from '../../../dist/utils/with-theme.utils';
import { PartialKeys } from '../../utils/object.utils';
import { constUndefined } from 'fp-ts/lib/function';
import { Icon } from '../icon/icon';
import { DivStyled } from '../styled-wrapper/styled-wrapper.component';
import { TTheme, MakeTheme } from '../../../dist/utils/theme.utils';

type TRawButtonProps = {
	theme: MakeTheme<'container' | 'content' | 'icon', TTheme>;
	icon: ReactElement;
	disabled: boolean;
	onClick?: EventHandler<MouseEvent<HTMLElement>>;
	onDoubleClick?: EventHandler<MouseEvent<HTMLElement>>;
};

class RawButton extends Component<TRawButtonProps> {
	render() {
		const { theme, icon, onClick, onDoubleClick } = this.props;

		console.log(theme);

		return (
			<DivStyled theme={theme.container}>
				<DivStyled theme={theme.content} onClick={onClick} onDoubleClick={onDoubleClick}>
					{icon}
				</DivStyled>
			</DivStyled>
		);
	}
}

export const defaultsProps = {
	icon: <Icon />,
	disabled: false,
	onClick: constUndefined,
	onDoubleClick: constUndefined,
};

export type TButtonProps = PartialKeys<TRawButtonProps, 'theme'>;
export const Button = customWithDefaults(defaultsProps)(withTheme('ButtonComponent', theme)(RawButton));
