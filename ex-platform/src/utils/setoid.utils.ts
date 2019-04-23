import { Setoid, strictEqual } from 'fp-ts/lib/Setoid';
import { on } from 'fp-ts/lib/function';
export namespace SetoidUtils {
	export const setoidStrict = {
		equals: strictEqual,
	};

	export const contramap = <A, B>(f: (b: B) => A, fa: Setoid<A>): Setoid<B> => {
		return {
			equals: on(fa.equals)(f),
		};
	};
}
