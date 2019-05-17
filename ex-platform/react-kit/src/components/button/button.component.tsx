import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { TRawButtonProps, TButtonState } from './button.model';
import { StyledComponent, TStyledComponentProps } from '../../utils/styled.utils';
import { theme } from './theme/button.theme';
import { customWithDefaults } from '../../utils/with-defaults.utils';
import { withTheme } from '../../../dist/utils/with-theme.utils';
import { PartialKeys } from '../../utils/object.utils';
import { constUndefined } from 'fp-ts/lib/function';
import { Icon } from '../icon/icon';

const DivStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent {...props} />;

class RawButton extends Component<TRawButtonProps, TButtonState> {
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
export const Button = customWithDefaults(defaultsProps)(withTheme('ButtonComponent', theme as any)(RawButton));
