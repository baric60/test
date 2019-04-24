import * as CSS from 'csstype';

type TStyle = CSS.Properties<string | number>[keyof CSS.Properties<string | number>];
type TFunctionalStyle<P extends {}> = CSS.Properties<(props: P) => string | number>[keyof CSS.Properties<
	(props: P) => string | number
>];

export type TTheme = { [key in string]: TStyle | TTheme };

export type MakeTheme<K extends string, T = string> = { [P in K]?: T };

export type TFunctionalTheme<P extends {}> = { [key in string]: TStyle | TFunctionalStyle<P> | TFunctionalTheme<P> };

export type MakeFunctionalTheme<P extends { theme: TTheme }, T = P> = {
	[Key in keyof P['theme']]?: TStyle | TFunctionalStyle<T> | TFunctionalTheme<T>
};
