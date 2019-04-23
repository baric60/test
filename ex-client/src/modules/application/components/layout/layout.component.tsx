import * as React from 'react';
import { Component, ComponentType } from 'react';
import { StyledUtils } from 'ex-platform/src/utils/styled.utils';
import { theme } from './theme/layout.theme';
import { DivStyled } from '../../../../common/components/styled.component';
import { DefaultTheme } from 'styled-components';
import { PartialKey } from 'ex-platform/src/utils/object.utils';

export type TRawLayoutComponentProps = {
	name?: string;
	theme: DefaultTheme;
};

class RawLayoutComponent extends Component<TRawLayoutComponentProps> {
	render() {
		return <DivStyled styles={theme}>aaa</DivStyled>;
	}
}

export type TLayoutComponentProps = PartialKey<TRawLayoutComponentProps, 'theme'>;

export const LayoutComponent: ComponentType<TLayoutComponentProps> = StyledUtils.withTheme(theme)(RawLayoutComponent);
