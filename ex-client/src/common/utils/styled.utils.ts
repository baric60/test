import { ComponentClass, Component } from 'react';
import styled, { CSSObject, StyledComponent, ThemeProvider } from 'styled-components';
import { createElement } from 'react';
import { WithTheme } from '../components/withTheme.component';
export namespace StyledUtils {
	export const styledComponent: <P extends Object>(
		styles: CSSObject,
	) => (component: ComponentClass) => StyledComponent<ComponentClass, P> = styles => target => styled(target)(styles);

	export const withTheme = <P extends object = never, S = never, T extends object = never>(theme: P) => (
		target: any,
	): any => {
		return class extends Component {
			render() {
				console.log(theme);

				return createElement(WithTheme, { theme, target });
			}
		};
	};
}
