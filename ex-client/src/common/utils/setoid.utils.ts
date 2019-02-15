import { Setoid, strictEqual } from 'fp-ts/lib/Setoid';
import * as isEqual from 'date-fns/is_equal';
import { on } from 'fp-ts/lib/function';
export namespace SetoidUtils {
	export const setoidStrict = {
		equals: strictEqual,
	};

	/**
	 * @deprecated use fp-ts
	 */
	export const setoidDate: Setoid<Date> = {
		equals: (a, b) => isEqual(a, b),
	};

	export const contramap = <A, B>(f: (b: B) => A, fa: Setoid<A>): Setoid<B> => {
		return {
			equals: on(fa.equals)(f),
		};
	};
}
