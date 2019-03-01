import * as React from 'react';
import { ComponentType } from 'react';
import { StyledUtils } from '../../../../../../ex-platform/src/utils/styled.utils';
import { LayoutContainer } from '../../containers/layout/layout.container';
import { ReaderUtils } from '../../../../common/utils/reader.utils';
import { theme, TApplicationTheme } from './theme/application.theme';
import { DivStyled, InputStyled, PrintStyled } from '../../../../common/components/styled.component';

export type TApplicationProps = {
	name: string;
	theme?: TApplicationTheme;
};

export type TApplicationState = {
	value: string;
};

export const ApplicationComponent = ReaderUtils.combine(LayoutContainer, LayoutContainer => {
	class RawApplication extends React.Component<TApplicationProps, TApplicationState> {
		state = {
			value: 'value',
		};

		render() {
			const { name } = this.props;
			const { value } = this.state;

			return (
				<DivStyled styles={theme.container}>
					<PrintStyled styles={theme.text}>Some name - ${name}</PrintStyled>
					<InputStyled
						defaultValue={value}
						styles={theme.input}
						size={this.calculateSize}
						onChange={this.onChange}
					/>
					<LayoutContainer />
				</DivStyled>
			);
		}

		private calculateSize = () => {
			return 1111;
		};

		private onChange = (value: string) => {
			this.setState({
				value,
			});
		};
	}

	const application: ComponentType<any> = StyledUtils.withTheme(theme)(RawApplication);

	return application;
});
