import * as React from 'react';
import { Component } from 'react';
import { StyledUtils } from '../../../../../../ex-platform/src/utils/styled.utils';
import { theme } from './theme/layout.theme';
import { DivStyled } from '../../../../common/components/styled.component';

export type TLayoutComponentProps = {
	name: string;
};

class RawLayoutComponent extends Component<TLayoutComponentProps, {}> {
	render() {
		return <DivStyled styles={theme}>aaa</DivStyled>;
	}
}

export const LayoutComponent = StyledUtils.withTheme(theme)(RawLayoutComponent);
