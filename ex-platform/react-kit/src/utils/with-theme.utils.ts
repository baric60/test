import { createElement, Component, ComponentClass, ComponentType, Ref } from 'react';
import { CSSObject } from 'styled-components';
import { Omit } from 'lodash';
export { CSSObject } from 'styled-components';
import { PartialKeys } from './object.utils';
import { TTheme, TFunctionalTheme } from './theme.utils';
import console = require('console');

type TTargetProps = { theme?: TFunctionalTheme<TTargetProps> };

type CT<P> = ComponentType<P>;
type OmitTheme<P extends TTargetProps> = PartialKeys<P, 'theme'>;
type TResult<P extends TTargetProps, C extends ComponentType<P>> = ComponentClass<
	OmitTheme<
		P & {
			withRef?: Ref<never>;
		}
	>
>;

type TResultProps<P extends TTargetProps> = Omit<P, 'theme'> & {
	theme?: P['theme'];
};
type TWithRef<P extends TTargetProps, C> = TResultProps<P> & {
	withRef?: Ref<C>;
	theme: TTheme;
};

export const withTheme = <S extends object>(name: string, defaultTheme: TFunctionalTheme<S>) => {
	function decorate<P extends TTargetProps>(target: CT<P>): TResult<P, CT<P>> {
		return class ThemedComponent extends Component<TWithRef<P, ComponentClass<TResultProps<P>>>, never> {
			render() {
				const { withRef } = this.props;
				const rest: any = Object.assign({}, this.props);

				const props = {
					...rest,
					ref: withRef,
					theme: mergeThemes(this.props, defaultTheme as any, rest.theme),
				};
				return createElement(target, props);
			}
		};
	}

	return decorate;
};

/**
 * 
 * @param props props of component
 * @param themes spread with theme objects
 */
export function mergeThemes<P extends object>(props: P, ...themes: TFunctionalTheme<P>[]): CSSObject {
	return themes.reduce(
		(acc: CSSObject, theme: TFunctionalTheme<P>) => mergeTwoThemes(props, acc, theme),
		{} as CSSObject,
	) as CSSObject;
}

const mergeTwoThemes = <P extends object>(
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

		switch (typeof mixinValue) {
			case 'object': {
				switch (typeof defaultValue) {
					case 'string':
					case 'number':
					case 'undefined': {
						result[key] = mergeThemes(props, mixinValue);
						break;
					}
					case 'object': {
						result[key] = mergeThemes(props, defaultValue, mixinValue);
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
			case 'undefined': {
				delete result[key];
				break;
			}
			default: {
				switch (typeof defaultValue) {
					case 'object': {
						throw new Error(`You are merging non-object ${mixinValue} with an object ${key}`);
					}
					case 'function':
					case 'undefined': {
						break;
					}
				}
				break;
			}
		}
	});

	return result;
};
