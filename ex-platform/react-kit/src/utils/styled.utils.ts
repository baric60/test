import { Component, createElement, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { TTheme } from './theme.utils';
import { customWithDefaults } from './with-defaults.utils';
import { constUndefined } from 'fp-ts/lib/function';

export type TComponentTag = 'div' | 'p' | 'ul' | 'li' | 'a';

type TRawStyledClassProps = {
	theme: TTheme;
	as: TComponentTag;
	children: ReactNode;
	onClick: (event: MouseEvent<HTMLElement>) => void;
	onDoubleClick: (event: MouseEvent<HTMLElement>) => void;
};

class StyledComponentClass extends Component<TRawStyledClassProps> {
	render() {
		const { theme, as, children } = this.props;
		const element = styled(as)(theme);
		return createElement(element, {}, children);
	}
}

const defaults: TRawStyledClassProps = {
	theme: {},
	as: 'div',
	children: null,
	onClick: constUndefined,
	onDoubleClick: constUndefined,
};

export type TStyledComponentProps = Partial<TRawStyledClassProps>;
export const StyledComponent = customWithDefaults<TStyledComponentProps>(defaults)(StyledComponentClass);

export type TInputTag = 'text' | 'textarea';

type TRawStyledInputProps = {
	theme: TTheme;
	type: TInputTag;
	value: string;
	defaultValue: string;
	onChange: (value: string) => void;
};

class StyledInputClass extends Component<TRawStyledInputProps> {
	render() {
		const { theme, type, defaultValue, children } = this.props;
		// const onChange = this.onChange;
		const element = styled.input.attrs({
			type,
			defaultValue,
			// onChange,
			children,
		})(theme);
		return createElement(element);
	}

	// private onChange: (element: any) => void = element => {
	// 	if (element.value !== this.props.value) {
	// 		this.props.onChange(element.value);
	// 	}
	// };
}

const defaultProps: TRawStyledInputProps = {
	type: 'text',
	theme: {},
	value: '',
	defaultValue: '',
	onChange: constUndefined,
};

export type TStyledInputProps = Partial<TRawStyledInputProps>;
export const StyledInput = customWithDefaults<TRawStyledInputProps>(defaultProps)(StyledInputClass);
