import { mergeThemes } from '../with-theme.utils';
import { TFunctionalTheme, TTheme } from '../theme.utils';

type TComponentProps = {
	value: number;
};

describe('with-theme.utils', () => {
	describe('mergeThemes', () => {
		it('should return empty theme', () => {
			const props: TComponentProps = {
				value: 1,
			};
			const theme1: TFunctionalTheme<TComponentProps> = {};
			const result: TTheme = {};

			expect(mergeThemes(props, theme1)).toEqual(result);
		});

		it('should transformate function to string', () => {
			const props: TComponentProps = {
				value: 13,
			};
			const theme: TFunctionalTheme<TComponentProps> = {
				container: {
					width: props => props.value * 10,
				},
			};
			const result: TTheme = {
				container: {
					width: 130,
				},
			};

			expect(mergeThemes(props, theme)).toEqual(result);
		});

		it('should delete unefined property', () => {
			const theme1: TFunctionalTheme<TComponentProps> = {
				container: {
					color: 'red',
				},
			};
			const theme2: TFunctionalTheme<TComponentProps> = {
				container: {
					color: undefined,
				},
			};
			const result: TTheme = {
				container: { color: undefined },
			};

			expect(mergeThemes(theme1, theme2)).toEqual(result);
		});

		it('should return result of function in second theme', () => {
			const props: TComponentProps = {
				value: 13,
			};
			const firstTheme: TFunctionalTheme<TComponentProps> = {
				container: {
					width: props => props.value * 1,
					height: props => props.value + 14,
				},
			};
			const secondTheme: TFunctionalTheme<TComponentProps> = {
				container: {
					width: props => props.value * 20,
				},
			};
			const result: TTheme = {
				container: {
					width: 260,
					height: 27,
				},
			};

			expect(mergeThemes(props, firstTheme, secondTheme)).toEqual(result);
		});

		it('should return properties of second theme', () => {
			const theme: TFunctionalTheme<TComponentProps> = {
				display: 'flex',
				color: 'red',
				background: () => 'white',
			};
			const result: TTheme = {
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
			const container: TFunctionalTheme<TComponentProps> = {
				height: '30px',
				width: '20px',
				color: () => 'green',
			};
			const button: TFunctionalTheme<TComponentProps> = {
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
			const firstTheme: TFunctionalTheme<TComponentProps> = {
				container,
				button,
			};
			const secondTheme: TFunctionalTheme<TComponentProps> = {
				container: {
					...container,
					...{
						color: () => 'black',
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
			const result: TTheme = {
				container: {
					height: '30px',
					width: '30px',
					color: 'black',
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
