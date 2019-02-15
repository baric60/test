import { RemoteData, RemoteDataUtils, remoteData, RemoteSuccess } from './remote-data.utils';
import { sequence, Traversable } from 'fp-ts/lib/Traversable';
import { array } from 'fp-ts/lib/Array';
import { Function1, Function2 } from 'lodash';
import { Monad2 } from 'fp-ts/lib/Monad';
import { Applicative } from 'fp-ts/lib/Applicative';
import { HKT } from 'fp-ts/lib/HKT';

const URI = 'MultipleRemoteDataTraverse';
type URI = typeof URI;

declare global {
	interface Array<T> {
		/** phantom property added by `fp-ts` */
		_URI: URI;
		/** phantom property added by `fp-ts` */
		_A: T;
	}
}

const zero = (): any[] => [];

const snoc = <A, B>(as: Array<A>, a: A): Array<A> => {
	const len = as.length;
	const r = Array(len + 1);
	for (let i = 0; i < len; i++) {
		r[i] = as[i];
	}
	r[len] = a;
	return r;
};

const reduceWithIndex = <A, B>(fa: Array<A>, b: B, f: (i: number, b: B, a: A) => B): B => {
	const l = fa.length;
	let r = b;
	for (let i = 0; i < l; i++) {
		r = f(i, r, fa[i]);
	}
	return r;
};

const traverseWithIndex = <F, A, B>(F: Applicative<F>) => (
	ta: Array<A>,
	f: (i: number, a: A) => HKT<F, B>,
): HKT<F, Array<B>> => {
	return [];
};

export namespace MultipleRemoteDataUtils {
	export const traverse = <F, A, B>(
		F: Applicative<F>,
	): ((ta: Array<A>, f: (a: A) => HKT<F, B>) => HKT<F, Array<B>>) => {
		const traverseWithIndexF = traverseWithIndex(F);
		return (ta, f) => traverseWithIndexF(ta, (_, a) => f(a));
	};

	export function concat<A, L>(a: RemoteData<A, L>): [RemoteData<A, L>];
	export function concat<A, B, L>(a: RemoteData<A, L>, b: RemoteData<B, L>): [RemoteData<A, L>, RemoteData<B, L>];
	export function concat<A, B, C, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
	): [RemoteData<A, L>, RemoteData<B, L>, RemoteData<C, L>];
	export function concat<A, B, C, D, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
	): [RemoteData<A, L>, RemoteData<B, L>, RemoteData<C, L>, RemoteData<D, L>];
	export function concat<A, B, C, D, E, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
	): [RemoteData<A, L>, RemoteData<B, L>, RemoteData<C, L>, RemoteData<D, L>, RemoteData<E, L>];
	export function concat<A, B, C, D, E, F, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
		f: RemoteData<F, L>,
	): [RemoteData<A, L>, RemoteData<B, L>, RemoteData<C, L>, RemoteData<D, L>, RemoteData<E, L>, RemoteData<F, L>];
	export function concat<A, B, C, D, E, F, G, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
		f: RemoteData<G, L>,
		g: RemoteData<F, L>,
	): [
		RemoteData<A, L>,
		RemoteData<B, L>,
		RemoteData<C, L>,
		RemoteData<D, L>,
		RemoteData<E, L>,
		RemoteData<F, L>,
		RemoteData<G, L>
	];
	export function concat<A, B, C, D, E, F, G, H, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
		f: RemoteData<F, L>,
		g: RemoteData<G, L>,
		h: RemoteData<H, L>,
	): [
		RemoteData<A, L>,
		RemoteData<B, L>,
		RemoteData<C, L>,
		RemoteData<D, L>,
		RemoteData<E, L>,
		RemoteData<F, L>,
		RemoteData<G, L>,
		RemoteData<H, L>
	];

	export function concat<T, L>(...list: RemoteData<T, L>[]): RemoteData<T, L>[] {
		// console.log(sequence(remoteData, array)(list));
		console.log(sequence(remoteData, array)(list));
		return list;
	}
}

export const multipleRemoteDataTraverse: Traversable<URI> = {
	URI,
	traverse: MultipleRemoteDataUtils.traverse,
};
