import * as React from 'react';
import { Component, Fragment } from 'react';
import { LayoutContainer } from '../../containers/layout/layout.container';
import { ReaderUtils } from 'ex-platform/dist/utils/reader.utils';
import { theme, GlobalStyle } from './theme/application.theme';
import { DivStyled } from '../../../../common/components/styled.component';
import { PartialKeys } from 'ex-platform/dist/utils/object.utils';
import { Button } from '../../../../common/components/button/button.component';
import { withTheme } from 'ex-platform/dist/utils/with-theme.utils';
import { TRawApplicationProps, TApplicationState } from './application.model';

export const ApplicationComponent = ReaderUtils.combine(LayoutContainer, LayoutContainer => {
	class RawApplication extends Component<TRawApplicationProps, TApplicationState> {
		state = {
			value: 'value',
		};

		render() {
			const { theme } = this.props;

			return (
				<Fragment>
					<DivStyled theme={theme.container}>
						{/* <PrintStyled styles={theme.text}>Some name - {name}</PrintStyled>
						<InputStyled
							defaultValue={value}
							styles={theme.input}
							size={this.calculateSize}
							onChange={this.onChange}
						/> */}
						<Button theme={theme.button} disabled={true} />
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

export type TApplicationProps = PartialKeys<TRawApplicationProps, 'theme'>;
