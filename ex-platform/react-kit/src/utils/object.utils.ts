export type PartialKeys<P extends object, K extends keyof P> = Omit<P, K> & Partial<Pick<P, K>>;

export namespace ObjectUtils {
	export function mapFields<A extends object>(value: A, callback: (key: string) => void): A {
		return Object.keys(value).reduce(
			(acc, key) => {
				return {
					...acc,
					[key]: callback(key),
				};
			},
			{} as A,
		);
	}
}
