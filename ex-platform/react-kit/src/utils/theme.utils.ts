import * as CSS from 'csstype';
import { ThemeProps } from 'styled-components';

type TStyle = CSS.Properties<string | number>[keyof CSS.Properties<string | number>];
type TFunctionalStyle<P extends {}> = CSS.Properties<(props: P) => string | number>[keyof CSS.Properties<
	(props: P) => string | number
>];

export type TTheme = { [key in string]: TStyle | TTheme };

export type MakeTheme<K extends string, T = string> = { [P in K]?: T };

export type TFunctionalTheme<P extends {}> = { [key in string]: TStyle | TFunctionalStyle<P> | TFunctionalTheme<P> };

export type MakeFunctionalTheme<K extends string, T extends TTheme, P extends object> = {
	[Element in K]: { [Key in keyof T]: TFunctionalTheme<P> } | TFunctionalTheme<P>
};

export type RevertFunctionalTheme<K extends string, T extends TFunctionalTheme<{}>> = {
	[Element in K]: { [Key in keyof T]: TTheme } | TTheme
};
