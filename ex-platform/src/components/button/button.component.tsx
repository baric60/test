import * as React from 'react';
import { Component } from 'react';
import { TRawButtonProps, TButtonState } from './button.model';
import { CustomStyledClass, StyledInputClass, TCustomStyledClassProps } from '../../utils/styled.utils';
import { Omit } from 'lodash';
import { theme } from './theme/button.theme';
import { withDefaults } from '../../utils/with-defaults.utils';
import { withTheme } from '../../utils/with-theme.utils';
import { PartialKey } from '../../utils/object.utils';

const defaults = {
	count: 2,
};

export const DivStyled: React.FunctionComponent<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass {...props} />
);

class RawButton extends Component<TRawButtonProps, TButtonState> {
	render() {
		const { theme, disabled, icon, onClick, onDoubleClick } = this.props;
		const { container } = theme;

		console.log(theme);

		return (
			<DivStyled styles={container}>
				<div onClick={onClick} onDoubleClick={onDoubleClick}>
					{icon}
				</div>
			</DivStyled>
		);
	}
}

export type TButtonProps = PartialKey<TRawButtonProps, 'theme'>;
export const Button = withTheme('ButtonComponent', theme)(withDefaults(defaults)(RawButton));
