import * as React from 'react';
import { Component } from 'react';
import { LayoutContainer } from '../../containers/layout/layout.container';
import { ReaderUtils } from '../../../../common/utils/reader.utils';
import { theme, TApplicationTheme } from './theme/application.theme';
import { DivStyled, InputStyled, PrintStyled } from '../../../../common/components/styled.component';
import { PartialKey } from '../../../../common/utils/object.utils';
import { Button } from '../../../../common/components/button/button';
export * from '@devexperts/react-kit/dist/components/Popover/Popover';

type TRawApplicationProps = {
	name: string;
	theme?: TApplicationTheme;
};

export type TApplicationState = {
	value: string;
};

export const ApplicationComponent = ReaderUtils.combine(LayoutContainer, LayoutContainer => {
	return class RawApplication extends Component<TRawApplicationProps, TApplicationState> {
		state = {
			value: 'value',
		};

		render() {
			const { name } = this.props;
			const { value } = this.state;

			return (
				<DivStyled styles={theme.container}>
					<PrintStyled styles={theme.text}>Some name - {name}</PrintStyled>
					<InputStyled
						defaultValue={value}
						styles={theme.input}
						size={this.calculateSize}
						onChange={this.onChange}
					/>
					<Button theme={theme.button} />
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
	};
});

export type TApplicationProps = PartialKey<TRawApplicationProps, 'theme'>;
