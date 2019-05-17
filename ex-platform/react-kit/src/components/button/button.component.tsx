import * as React from 'react';
import { Component, FunctionComponent } from 'react';
import { TRawButtonProps, TButtonState } from './button.model';
import { CustomStyledClass, TCustomStyledClassProps } from '../../utils/styled.utils';
import { theme } from './theme/button.theme';
import { withDefaults } from '../../utils/with-defaults.utils';
import { withTheme } from '../../utils/with-theme.utils';
import { PartialKeys } from '../../utils/object.utils';
import { constUndefined } from 'fp-ts/lib/function';

const defaults = {
	count: 2,
	onClick: constUndefined,
	onDoubleClick: constUndefined,
	icon: <span />,
	theme: {},
};

// IntrinsicElements
// DOMAttributes

const DivStyled: FunctionComponent<TCustomStyledClassProps> = props => <CustomStyledClass {...props} />;

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

export type TButtonProps = PartialKeys<TRawButtonProps, 'theme'>;
export const Button = withTheme('ButtonComponent', theme)(withDefaults(defaults)(RawButton));
