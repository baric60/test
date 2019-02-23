import { ComponentClass, Component, ComponentType } from 'react';
import styled, { CSSObject, StyledComponent, ThemeProvider, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { createElement } from 'react';
import { element } from 'prop-types';

export type TCustomStyledClassProps = {
	styles: CSSObject;
	children?: any;
	className?: string;
	as?: 'div' | 'ul' | 'li' | 'a';
};

class CustomStyledClass extends Component<TCustomStyledClassProps, {}> {
	constructor(props: TCustomStyledClassProps) {
		super(props);
	}

	static defaultProps = {
		as: 'div',
		styles: {},
	};

	render() {
		const { styles, as } = this.props;
		const element = styled(as)(styles);
		return createElement(element);
	}
}

export type TStyledInputProps = {
	styles: CSSObject;
	type?: 'text' | 'checkbox' | 'submit';
	value?: string;
	size?: number | ((props: ThemedStyledProps<CSSObject, any>) => number);
};

class StyledInputClass<A> extends Component<TStyledInputProps, {}> {
	constructor(props: TStyledInputProps) {
		super(props);
	}

	static defaultProps = {
		type: 'text',
		styles: {},
		value: '',
		size: 100,
	};

	render() {
		const { styles, type, value, size } = this.props;
		const element = styled.input.attrs({
			type,
			value,
			size,
		})(styles);
		return createElement(element);
	}
}

export namespace StyledUtils {
	export const styledComponent: <P extends Object>(
		styles: CSSObject,
	) => (component: ComponentClass) => StyledComponent<ComponentClass, P> = styles => target => styled(target)(styles);

	export const StyledComponent = CustomStyledClass;
	export const StyledInput = StyledInputClass;

	export const withTheme = <P extends object = never, S = never, T extends object = never>(theme: DefaultTheme) => (
		children: ComponentType,
	): any => {
		return class StyledClass<T extends object, U extends object> extends ThemeProvider {
			static propTypes = { children: element };

			static defaultProps = {
				theme,
				children: createElement('div'),
			};
		};
	};
}
