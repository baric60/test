import { Properties } from 'csstype';

type TStyle = Properties<string | number>[keyof Properties<string | number>];

type TFunctionalStyle<P extends object> = Properties<(props: NonFunctionalTheme<P>) => string | number>[keyof Properties<
	(props: NonFunctionalTheme<P>) => string | number
>];

export type TTheme = { [key in string]: TStyle | TTheme };

export type MakeTheme<K extends string, T = TTheme> = { [P in K]?: T };

export type TFunctionalTheme<P extends object = never> = {
	[key in string]: TStyle | TFunctionalStyle<P> | TFunctionalTheme<P>;
};

export type DinamicTheme<P extends object & { theme: TTheme } = never> = {
	[Key in keyof P['theme']]: TFunctionalTheme<Omit<P, 'theme'>>;
};

type NonFunctionPropertyNames<T extends object> = { [K in keyof T]: T[K] extends string | boolean | number ? K : never }[keyof T];

export type NonFunctionalTheme<P extends object> = Pick<P, NonFunctionPropertyNames<P>>;