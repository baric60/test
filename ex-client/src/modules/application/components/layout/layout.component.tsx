import * as React from 'react';
import { Component } from 'react';
import { StyledUtils } from '../../../../common/utils/styled.utils';
import { theme } from './theme/layout.sass';
import CustomStyledClass = StyledUtils.StyledComponent;

export type TLayoutComponentProps = {
	name: string;
};

class RawLayoutComponent extends Component<TLayoutComponentProps, {}> {
	render() {
		return <CustomStyledClass />;
	}
}

export const LayoutComponent = StyledUtils.withTheme(theme)(RawLayoutComponent);
