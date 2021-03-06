import { createElement, Component, ComponentType } from 'react';
import { CSSObject } from 'styled-components';
import { TFunctionalTheme, NonFunctionalTheme, TTheme } from './theme.utils';

type TTargetProps = { theme?: TFunctionalTheme<TTargetProps> };

type CT<P> = ComponentType<P>;

export const withTheme = <S extends object>(name: string | symbol, defaultTheme: TFunctionalTheme<S>) => {
	function decorate<P extends TTargetProps>(target: CT<P>): CT<any> {
		return class ThemedComponent extends Component<TTargetProps> {
			render() {
				const { theme, ...rest } = this.props;

				const props = {
					...rest,
					theme: mergeThemes(this.props, defaultTheme, theme),
				};

				return createElement(target, props);
			}
		};
	}

	return decorate;
};

/**
 *
 * @param {object} props props of component
 * @param themes spread with themes
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
				result[key] = mixinValue(transform<P>(props));
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

function transform<P extends object, R = NonFunctionalTheme<P>>(props: P): R {
	return Object.keys(props)
		.filter(key => {
			switch (typeof props[key]) {
				case 'string':
				case 'number':
				case 'boolean':
					return true;
				default:
					return false;
			}
		})
		.reduce((acc, key) => ({ ...acc, [key]: props[key] }), {} as R);
}
