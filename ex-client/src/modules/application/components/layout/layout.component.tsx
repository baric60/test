import * as React from 'react';
import { Component, ComponentType } from 'react';
import { withTheme } from 'ex-platform/react-kit/dist/utils/with-theme.utils';
import { theme } from './theme/layout.theme';
import { DivStyled } from '../../../../common/components/styled.component';
import { PartialKeys } from 'ex-platform/react-kit/dist/utils/object.utils';
import { TRawLayoutProps } from './layout.model';
export { TRawLayoutProps } from './layout.model';

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
