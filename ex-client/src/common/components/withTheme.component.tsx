import * as React from 'react';
import { Component, createElement, ComponentClass } from 'react';
import { ThemeProvider } from 'styled-components';

export type TWithThemeProps = {
	theme: any;
	target: ComponentClass;
};

export class WithTheme extends Component<TWithThemeProps, {}> {
	render() {
		const { target, theme } = this.props;
		return <ThemeProvider theme={theme}>{createElement(target, { theme })}</ThemeProvider>;
	}
}
