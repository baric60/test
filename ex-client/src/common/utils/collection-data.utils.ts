import { Function1, Function2 } from 'fp-ts/lib/function';
import { Monad2 } from 'fp-ts/lib/Monad';
import { Applicative } from 'fp-ts/lib/Applicative';
import { Traversable, traverse } from 'fp-ts/lib/Traversable';
import { HKT } from 'fp-ts/lib/HKT';
import { Foldable2 } from 'fp-ts/lib/Foldable';

export const URI = 'CollectionData';
export type URI = typeof URI;

declare module 'fp-ts/lib/HKT' {
	//note that order of type arguments should be reveresed
	interface URI2HKT2<A> {
		CollectionData: CollectionData<A>;
	}
}

export class CollectionData<A> {
	readonly _URI: URI;
	readonly _A: A;

	constructor(readonly value: A) {}

	public map<B>(f: Function1<A, B>): CollectionData<B> {
		return CollectionDataUtils.of<B>(f(this.value));
	}

	public ap<B>(fab: CollectionData<Function1<A, B>>): any {
		return fab;
	}

	public chain<B>(f: Function1<A, B>): B {
		return f(this.value);
	}

	public reduce<B>(f: Function2<B, A, B>, b: B): B {
		return f(b, this.value);
	}

	public traverse<F, B>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, CollectionData<B>> {
		return f => F.map(f(this.value), b => CollectionDataUtils.of(b));
	}
}

export const collectionData: Monad2<URI> & Foldable2<URI> = {
	//HKT
	URI,

	// Monad
	of: CollectionDataUtils.of,
	map: CollectionDataUtils.map,
	chain: CollectionDataUtils.chain,
	ap: CollectionDataUtils.ap,

	//Foldable
	reduce: CollectionDataUtils.reduce,
	// traverse: CollectionData.traverse,
};

export namespace CollectionDataUtils {
	export const of = <A>(value: A): CollectionData<A> => new CollectionData(value);

	export const map = <A, B>(fa: CollectionData<A>, f: Function1<A, B>): CollectionData<B> => fa.map(f);

	export const ap = <A, B>(fab: CollectionData<Function1<A, B>>, fa: CollectionData<A>): CollectionData<B> =>
		fa.ap(fab);

	export const chain = <A, B>(fa: CollectionData<A>, f: Function1<A, B>): B => fa.chain(f);

	export const reduce = <A, B>(fa: CollectionData<A>, b: B, f: Function2<B, A, B>): B => fa.reduce(f, b);
}
