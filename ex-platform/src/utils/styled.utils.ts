import { ComponentClass, Component, ComponentType, ChangeEvent } from 'react';
import styled, { CSSObject, StyledComponent, ThemeProvider, DefaultTheme, ThemedStyledProps } from 'styled-components';
import { createElement } from 'react';
import { element } from 'prop-types';

export type TCustomStyledClassProps = {
	styles: CSSObject;
	as?: 'div' | 'p' | 'ul' | 'li' | 'a';
	children?: any;
	className?: string;
};

export class CustomStyledClass extends Component<TCustomStyledClassProps, {}> {
	static defaultProps = {
		as: 'div',
		styles: {},
	};

	render() {
		const { styles, as, children } = this.props;
		const element = styled(as)(styles);
		return createElement(element, {}, children);
	}
}

export type TStyledInputProps = {
	styles: CSSObject;
	type?: 'input' | 'text' | 'checkbox' | 'submit';
	value?: string;
	defaultValue?: string;
	size?: number | ((props: ThemedStyledProps<CSSObject, any>) => number);
	onChange?: (value: string) => void;
};

export class StyledInputClass extends Component<TStyledInputProps, {}> {
	static defaultProps = {
		type: 'text',
		styles: {},
		defaultValue: '',
		size: 100,
		onChange: () => {},
	};

	render() {
		const { styles, type, defaultValue, size, children } = this.props;
		const onChange = this.onChange;
		const element = styled.input.attrs({
			type,
			defaultValue,
			size,
			onChange,
			children,
		})(styles);
		return createElement(element);
	}

	private onChange: (element: any) => void = element => {
		if (element.value !== this.props.value) {
			this.props.onChange(element.value);
		}
	};
}

export namespace StyledUtils {
	export const styledComponent: <P extends Object>(
		styles: CSSObject,
	) => (component: ComponentClass) => StyledComponent<ComponentClass, P> = styles => target => styled(target)(styles);

	export const withTheme = <P extends object>(theme: DefaultTheme) => (children: ComponentType<P>): ComponentType =>
		class ThemeComponent<T extends object, U extends object> extends ThemeProvider {
			static propTypes = { children: element };

			static defaultProps = {
				theme,
				children: createElement(children),
			};
		};
}
