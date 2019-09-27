import * as React from 'react';
import { Component, MouseEvent } from 'react';
import { theme } from './theme/button.theme';
import { withDefaults } from '../../utils/with-defaults.utils';
import { withTheme } from '../../utils/with-theme.utils';
import { PartialKeys } from '../../utils/object.utils';
import { Icon } from '../icon/icon';
import { DivStyled } from '../styled-wrapper/styled-wrapper.component';
import { MakeTheme } from '../../../dist/utils/theme.utils';

export type TRawButtonProps = {
	theme: MakeTheme<'container' | 'content' | 'icon'>;
	icon: Node;
	disabled: boolean;
	onClick?: () => void;
	onDoubleClick?: () => void;
};

class RawButton extends Component<TRawButtonProps> {
	render() {
		const { theme, icon } = this.props;

		return (
			<DivStyled theme={theme.container}>
				<DivStyled theme={theme.content} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick}>
					{icon}
				</DivStyled>
			</DivStyled>
		);
	}

	private handleClick = (_: MouseEvent<HTMLElement>) => {
		this.props.onClick && this.props.onClick();
	};

	private handleDoubleClick = (_: MouseEvent<HTMLElement>) => {
		this.props.onDoubleClick && this.props.onDoubleClick();
	};
}

export const defaultsProps = {
	icon: <Icon />,
	disabled: false,
};

export type TButtonProps = PartialKeys<TRawButtonProps, 'theme'>;
export const Button = withDefaults(defaultsProps)(withTheme('ButtonComponent', theme)(RawButton));
