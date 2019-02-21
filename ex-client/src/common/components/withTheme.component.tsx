import * as React from 'react';
import { Component, createElement, ComponentClass } from 'react';
import { ThemeProvider } from 'styled-components';

export type TWithThemeProps = {
	theme: Object;
	children: ComponentClass;
};

export class WithTheme extends Component<TWithThemeProps, {}> {
	render() {
		const { theme, children } = this.props;
		return <ThemeProvider theme={theme}>{createElement(children)}</ThemeProvider>;
	}
}
