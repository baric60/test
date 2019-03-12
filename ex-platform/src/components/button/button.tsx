import * as React from 'react';
import { Component, ComponentClass, ReactElement, EventHandler, MouseEvent } from 'react';
import { CSSObject, StyledComponent } from 'styled-components';
import { StyledUtils } from '../../utils/styled.utils';
import styledComponent = StyledUtils.styledComponent;
import { Omit } from 'lodash';
import { theme } from './theme/button.theme';
import { withDefaults } from '../../utils/with-defaults.utils';
import { symbol } from 'prop-types';

type TRawButtonProps = {
	theme: CSSObject;
	disabled?: boolean;
	onClick?: EventHandler<MouseEvent<HTMLDivElement>>;
	onDoubleClick?: EventHandler<MouseEvent<HTMLDivElement>>;
	icon?: ReactElement;
};

type TButtonState = {};

const defaults = {};

type PartialKey<P extends object, K extends keyof P> = Omit<P, K>;
class RawButton extends Component<TRawButtonProps, TButtonState> {
	render() {
		const { theme, disabled, icon, onClick, onDoubleClick } = this.props;

		return (
			<div>
				<div onClick={onClick} onDoubleClick={onDoubleClick}>
					{icon}
				</div>
			</div>
		);
	}
}

const BUTTON = Symbol('Button');

export type TButtonProps = PartialKey<TRawButtonProps, 'theme'>;
export const Button: StyledComponent<ComponentClass<TRawButtonProps>, {}> = styledComponent(theme)(
	withDefaults(defaults)(RawButton),
);
