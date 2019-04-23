import { createElement, Component, ComponentClass, ComponentType, Ref } from 'react';
import { CSSObject } from 'styled-components';
import { Omit } from 'lodash';
export { CSSObject } from 'styled-components';
import { PartialKey } from './object.utils';
import { TTheme, TFunctionalTheme } from './theme.utils';

type TTargetProps = { theme?: TFunctionalTheme<TTargetProps> };

type CT<P> = ComponentType<P>;
type OmitTheme<P extends TTargetProps> = PartialKey<P, 'theme'>;
type TResult<P extends TTargetProps, C extends ComponentType<P>> = ComponentClass<
	OmitTheme<
		P & {
			withRef?: Ref<any>;
		}
	>
>;

type TResultProps<P extends TTargetProps> = Omit<P, 'theme'> & {
	theme?: P['theme'];
};
type TWithRef<P extends TTargetProps, C> = TResultProps<P> & {
	withRef?: Ref<C>;
};

export const withTheme = <S extends object>(name: string, defaultTheme: TFunctionalTheme<S>) => {
	function decorate<P extends TTargetProps>(target: CT<P>): TResult<P, CT<P>> {
		return class ThemedComponent extends Component<TWithRef<P, ComponentClass<TResultProps<P>>>, never> {
			render() {
				const { withRef } = this.props;
				const rest: any = Object.assign({}, this.props);

				console.log(target);

				const props = {
					...rest,
					ref: withRef,
					theme: mergeThemes(this.props, defaultTheme as any, rest.theme),
				};
				return createElement(target as any, props);
			}
		};
	}

	return decorate;
};

export function mergeThemes<P extends object>(props: P, ...themes: TFunctionalTheme<P>[]): CSSObject {
	return themes.reduce(
		(acc: CSSObject, theme: TFunctionalTheme<P>) => mergeTwoThemes(props, acc, theme),
		{} as CSSObject,
	) as CSSObject;
}

function transformateThemeToCSSObject<P extends {}>(props: P, theme: TFunctionalTheme<P>): CSSObject {
	return Object.keys(theme).reduce(
		(acc, key) => {
			const value = theme[key];
			switch (typeof value) {
				case 'function': {
					acc[key] = value(props);
					break;
				}
				case 'string':
				case 'number': {
					acc[key] = value;
				}
			}
			return acc;
		},
		{} as CSSObject,
	);
}

const mergeTwoThemes = <P extends {}>(
	props: P,
	original: CSSObject = {},
	mixin: TFunctionalTheme<P> = {},
): CSSObject => {
	const result: CSSObject = Object.keys(original).reduce(
		(acc, key) => Object.assign({}, acc, { [key]: original[key] }),
		{} as CSSObject,
	);

	Object.keys(mixin).forEach(key => {
		const defaultValue = result[key];
		const mixinValue = mixin[key];
		console.log(defaultValue);
		console.log(mixinValue);

		switch (typeof mixinValue) {
			case 'object': {
				switch (typeof defaultValue) {
					case 'object': {
						console.log(key);
						console.log(result[key]);
						console.log(1);
						result[key] = mergeThemes(props, defaultValue, mixinValue);
						break;
					}
					case 'undefined': {
						result[key] = transformateThemeToCSSObject(props, mixinValue);
						break;
					}
					default: {
						throw new Error(`You are merging object ${key} with a non-object ${defaultValue}`);
					}
				}
				break;
			}
			case 'function': {
				result[key] = mixinValue(props);
				break;
			}
			case 'string':
			case 'number': {
				result[key] = mixinValue;
				break;
			}
			default: {
				switch (typeof defaultValue) {
					case 'object': {
						throw new Error(`You are merging non-object ${mixinValue} with an object ${key}`);
					}
					case 'function': {
						break;
					}
					case 'undefined': {
						// result[key] = transformFunctionsToString(props, mixinValue);
						break;
					}
					default: {
						console.log(key);
						break;
					}
				}
				break;
			}
		}
	});

	return result;
};
