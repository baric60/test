import * as React from 'react';
import { StyledUtils, TStyledInputProps } from '../../../../common/utils/styled.utils';
import { LayoutContainer } from '../../containers/layout/layout.container';
import { ReaderUtils } from '../../../../common/utils/reader.utils';
import { theme, TApplicationTheme } from './theme/application.sass';
import StyledComponent = StyledUtils.StyledComponent;
import StyledInput = StyledUtils.StyledInput;

export type TApplicationProps = {
	name: string;
	theme: TApplicationTheme;
};
export const ApplicationComponent = ReaderUtils.combine(LayoutContainer, LayoutContainer => {
	class RawApplication extends React.Component<TApplicationProps, {}> {
		render() {
			return (
				<div>
					<StyledComponent styles={theme.block}>
						<div />
					</StyledComponent>
					<StyledInput type="submit" value="someThing" styles={theme.input} size={this.calculateSize} />
					<LayoutContainer />
				</div>
			);
		}

		private calculateSize = () => {
			return 1111;
		};
	}

	return StyledUtils.styledComponent(theme)(RawApplication);
});
