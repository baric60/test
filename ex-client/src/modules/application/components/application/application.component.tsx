import * as React from 'react';
import { Component, Fragment } from 'react';
import { LayoutContainer } from '../../containers/layout/layout.container';
import { ReaderUtils } from '../../../../common/utils/reader.utils';
import { theme, GlobalStyle } from './theme/application.theme';
import { DivStyled } from '../../../../common/components/styled.component';
import { PartialKey } from '../../../../common/utils/object.utils';
import { Button } from '../../../../common/components/button/button.component';
import { withTheme } from '../../../../../../ex-platform/src/utils/with-theme.utils';
import { TRawApplicationProps, TApplicationState } from './application.model';

export const ApplicationComponent = ReaderUtils.combine(LayoutContainer, LayoutContainer => {
	class RawApplication extends Component<TRawApplicationProps, TApplicationState> {
		state = {
			value: 'value',
		};

		render() {
			const { color } = this.props;
			const { value } = this.state;

			console.log(color);

			return (
				<Fragment>
					<DivStyled styles={theme.container}>
						{/* <PrintStyled styles={theme.text}>Some name - {name}</PrintStyled>
						<InputStyled
							defaultValue={value}
							styles={theme.input}
							size={this.calculateSize}
							onChange={this.onChange}
						/> */}
						<Button theme={theme.button} />
						{/* <LayoutContainer /> */}
					</DivStyled>
					<GlobalStyle />
				</Fragment>
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

	return withTheme('ButtonComponent', theme)(RawApplication);
});

export type TApplicationProps = PartialKey<TRawApplicationProps, 'theme'>;
