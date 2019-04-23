import * as React from 'react';
import { Component } from 'react';
import { TRawButtonProps, TButtonState } from './button.model';
import { CustomStyledClass, TCustomStyledClassProps } from '../../utils/styled.utils';
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
		const { theme, icon, onClick, onDoubleClick } = this.props;

		console.log(theme);

		return (
			<DivStyled styles={theme.container}>
				<div onClick={onClick} onDoubleClick={onDoubleClick}>
					{icon}
				</div>
			</DivStyled>
		);
	}
}

export type TButtonProps = PartialKey<TRawButtonProps, 'theme'>;
export const Button = withTheme('ButtonComponent', theme)(withDefaults(defaults)(RawButton));
