import * as React from 'react';
import { Component, ComponentType } from 'react';
import { withTheme } from 'ex-platform/dist/utils/with-theme.utils';
import { theme } from './theme/layout.theme';
import { DivStyled } from '../../../../common/components/styled.component';
import { PartialKeys } from 'ex-platform/dist/utils/object.utils';
import { MakeTheme } from 'ex-platform/dist/utils/theme.utils';

export type TRawLayoutProps = {
	name?: string;
	theme: MakeTheme<'container' | 'content'>;
};

class RawLayoutComponent extends Component<TRawLayoutProps> {
	render() {
		const { theme } = this.props;

		return (
			<DivStyled theme={theme.container}>
				<DivStyled theme={theme.content}>aaa</DivStyled>
			</DivStyled>
		);
	}
}

export type TLayoutProps = PartialKeys<TRawLayoutProps, 'theme'>;
export const LayoutComponent: ComponentType<TLayoutProps> = withTheme('LayoutComponent', theme)(RawLayoutComponent);
