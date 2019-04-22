import { mergeThemes, TTheme } from '../with-theme.utils';
import { CSSObject } from 'styled-components';

type TComponentProps = {
	value: number;
};

describe('with-theme.utils', () => {
	describe('mergeThemes', () => {
		it('should return empty theme', () => {
			const props: TComponentProps = {
				value: 1,
			};
			const theme1: TTheme<TComponentProps> = {};
			const result: CSSObject = {};

			expect(mergeThemes(props, theme1)).toEqual(result);
		});

		it('should transformate function to string', () => {
			const props: TComponentProps = {
				value: 13,
			};
			const theme: TTheme<TComponentProps> = {
				container: {
					width: (props: TComponentProps) => props.value * 10,
				},
			};
			const result: CSSObject = {
				container: {
					width: 130,
				},
			};

			expect(mergeThemes(props, theme)).toEqual(result);
		});

		it('should return result of function in second theme', () => {
			const props: TComponentProps = {
				value: 13,
			};
			const firstTheme: TTheme<TComponentProps> = {
				container: {
					width: (props: TComponentProps) => props.value * 1,
				},
			};
			const secondTheme: TTheme<TComponentProps> = {
				container: {
					width: (props: TComponentProps) => props.value * 20,
				},
			};
			const result: CSSObject = {
				container: {
					width: 260,
				},
			};

			expect(mergeThemes(props, firstTheme, secondTheme)).toEqual(result);
		});

		it('should return properties of second theme', () => {
			const theme: TTheme<TComponentProps> = {
				display: 'flex',
				color: 'red',
				background: () => 'white',
			};
			const result: CSSObject = {
				display: 'flex',
				color: 'red',
				background: 'white',
			};

			expect(mergeThemes({}, {}, theme)).toEqual(result);
		});

		it('should merge two themes', () => {
			const props: TComponentProps = {
				value: 1,
			};
			const container: TTheme<TComponentProps> = {
				height: '30px',
				width: '20px',
				color: () => 'green',
			};
			const button: TTheme<TComponentProps> = {
				container: {
					width: '20px',
					height: '20px',
					padding: '2px 2px 3px',
					background: 'black',
				},
				icon: {
					color: 'white',
				},
			};
			const firstTheme: TTheme<TComponentProps> = {
				...container,
				...button,
			};
			const secondTheme: TTheme<TComponentProps> = {
				container: {
					...container,
					...{
						width: '30px',
						background: () => 'red',
					},
				},
				button: {
					...button,
					...{
						container: {
							width: '30px',
							height: '30px',
							padding: '2px 2px 3px 1px',
						},
						icon: {
							color: 'red',
						},
					},
				},
			};
			const result: CSSObject = {
				container: {
					height: '30px',
					width: '30px',
					color: 'green',
					background: 'red',
				},
				button: {
					container: {
						background: 'black',
						width: '30px',
						height: '30px',
						padding: '2px 2px 3px 1px',
					},
					icon: {
						color: 'red',
					},
				},
			};

			console.log(mergeThemes({}, firstTheme, secondTheme));
			console.log(result);

			expect(mergeThemes(props, firstTheme, secondTheme)).toEqual(result);
		});

		it('should merge three themes', () => {
			const firstTheme = {};
			const secondTheme = {};
			const thirdTheme = {};
			const result = {};
			expect(mergeThemes({}, firstTheme, secondTheme, thirdTheme)).toEqual(result);
		});
	});
});
