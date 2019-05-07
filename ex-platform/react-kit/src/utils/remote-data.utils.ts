import { Predicate, constFalse, Function2, Function1, Lazy } from 'fp-ts/lib/function';
import { Monad2 } from 'fp-ts/lib/Monad';
import { Foldable2 } from 'fp-ts/lib/Foldable';
import { Alt2 } from 'fp-ts/lib/Alt';
import { Extend2 } from 'fp-ts/lib/Extend';
import { sequence } from 'fp-ts/lib/Traversable';
import { Applicative } from 'fp-ts/lib/Applicative';
import { HKT2, HKT } from 'fp-ts/lib/HKT';
import { isNone, none, Option, some, getSetoid as getOptionSetoid } from 'fp-ts/lib/Option';
import { Either, isLeft } from 'fp-ts/lib/Either';
import { Observable } from 'rxjs';
import { Setoid } from 'fp-ts/lib/Setoid';
import { array } from 'fp-ts/lib/Array';
import { of } from 'rxjs';
import { SetoidUtils } from './setoid.utils';
import { ArrayUtils } from './array.utils';
import { URIS2 } from 'fp-ts/lib/HKT';
import { URIS } from 'fp-ts/lib/HKT';
import { Type2 } from 'fp-ts/lib/HKT';
import { Type } from 'fp-ts/lib/HKT';
import { Promise } from 'es6-promise';
import { map as mapp, switchMap, distinctUntilChanged, shareReplay, withLatestFrom, tap, filter } from 'rxjs/operators';

export const URI = 'RemoteData';
export type URI = typeof URI;

declare module 'fp-ts/lib/HKT' {
	//note that order of type arguments should be reveresed
	interface URI2HKT2<L, A> {
		RemoteData: RemoteData<A, L>;
	}
}

export enum RemoteDataStatus {
	Initial = 'Initial',
	Pending = 'Pending',
	Failure = 'Failure',
	Success = 'Success',
}

export class RemoteInitial<A, L> {
	readonly _URI: URI;
	readonly _A: A;
	readonly _L: L;
	readonly status = RemoteDataStatus.Initial;

	alt(fy: RemoteData<A, L>): RemoteData<A, L> {
		return fy;
	}

	ap<B>(fab: RemoteData<Function1<A, B>, L>): RemoteData<B, L> {
		return this as any;
	}

	chain<B>(f: Function1<A, RemoteData<B, L>>): RemoteData<B, L> {
		return this as any;
	}

	extend<B>(f: Function1<RemoteData<A, L>, B>): RemoteData<B, L> {
		return this as any;
	}

	fold<B>(initial: Lazy<B>, pending: Lazy<B>, failure: Function1<L, B>, success: Function1<A, B>): B {
		return initial();
	}

	getOrElse(f: Lazy<A>): A {
		return f();
	}

	map<B>(f: Function1<A, B>): RemoteData<B, L> {
		return this as any;
	}

	/**
	 * Maps over this RemoteData value, producing new Observable
	 */
	map$<B>(f: Function1<A, Observable<RemoteData<B, L>>>): Observable<RemoteData<B, L>> {
		return of(this as any);
	}

	getOrElseValue(value: A): A {
		return value;
	}

	reduce<B>(f: Function2<B, A, B>, b: B): B {
		return b;
	}

	traverse<F extends URIS2>(
		F: Applicative<F>,
	): <L, B>(f: Function1<A, HKT2<F, L, B>>) => Type2<F, L, RemoteData<B, L>>;
	traverse<F extends URIS>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => Type<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>> {
		return f => F.of(this as any);
	}

	isPending(): this is RemotePending<A, L> {
		return false;
	}

	isFailure(): this is RemoteFailure<A, L> {
		return false;
	}

	isSuccess(): this is RemoteSuccess<A, L> {
		return false;
	}

	isInitial(): this is RemoteInitial<A, L> {
		return true;
	}

	toOption(): Option<A> {
		return none;
	}

	toNullable(): A | null {
		return null;
	}

	exists(p: Predicate<A>): boolean {
		return false;
	}

	contains(S: Setoid<A>, value: A): boolean {
		return false;
	}

	do(thunk: (value: A) => void): void {}

	filter(p: Predicate<A>): RemoteData<A, L> {
		return this;
	}
}

export class RemoteFailure<A, L> {
	_URI: URI;
	readonly _A: A;
	readonly _L: L;
	readonly status = RemoteDataStatus.Failure;

	constructor(readonly error: L) {}

	alt(fy: RemoteData<A, L>): RemoteData<A, L> {
		return fy;
	}

	ap<B>(fab: RemoteData<Function1<A, B>, L>): RemoteData<B, L> {
		return fab.status === RemoteDataStatus.Failure ? fab : (this as any);
	}

	chain<B>(f: Function1<A, RemoteData<B, L>>): RemoteData<B, L> {
		return this as any;
	}

	extend<B>(f: Function1<RemoteData<A, L>, B>): RemoteData<B, L> {
		return this as any;
	}

	fold<B>(initial: Lazy<B>, pending: Lazy<B>, failure: Function1<L, B>, success: Function1<A, B>): B {
		return failure(this.error);
	}

	getOrElse(f: Lazy<A>): A {
		return f();
	}

	map<B>(f: (a: A) => B): RemoteData<B, L> {
		return this as any;
	}

	/**
	 * Maps over this RemoteData value, producing new Observable
	 */
	map$<B>(f: Function1<A, Observable<RemoteData<B, L>>>): Observable<RemoteData<B, L>> {
		return of(this as any);
	}

	getOrElseValue(value: A): A {
		return value;
	}

	reduce<B>(f: Function2<B, A, B>, b: B): B {
		return b;
	}

	traverse<F extends URIS2>(
		F: Applicative<F>,
	): <L, B>(f: Function1<A, HKT2<F, L, B>>) => Type2<F, L, RemoteData<B, L>>;
	traverse<F extends URIS>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => Type<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>> {
		return f => F.of(this as any);
	}

	isInitial(): this is RemoteInitial<A, L> {
		return false;
	}

	isPending(): this is RemotePending<A, L> {
		return false;
	}

	isFailure(): this is RemoteFailure<A, L> {
		return true;
	}

	isSuccess(): this is RemoteSuccess<A, L> {
		return false;
	}

	toOption(): Option<A> {
		return none;
	}

	toNullable(): A | null {
		return null;
	}

	exists(p: Predicate<A>): boolean {
		return false;
	}

	contains(S: Setoid<A>, value: A): boolean {
		return false;
	}

	do(thunk: (value: A) => void): void {}

	filter(p: Predicate<A>): RemoteData<A, L> {
		return this;
	}
}

export class RemoteSuccess<A, L> {
	readonly _URI: URI;
	readonly _A: A;
	readonly _L: L;
	readonly status = RemoteDataStatus.Success;

	constructor(readonly value: A) {}

	alt(fy: RemoteData<A, L>): RemoteData<A, L> {
		return this;
	}

	ap<B>(fab: RemoteData<Function1<A, B>, L>): RemoteData<B, L> {
		return fab.status === RemoteDataStatus.Success ? this.map(fab.value) : (fab as any);
	}

	chain<B>(f: Function1<A, RemoteData<B, L>>): RemoteData<B, L> {
		return f(this.value);
	}

	extend<B>(f: Function1<RemoteData<A, L>, B>): RemoteData<B, L> {
		return RemoteDataUtils.success<B, L>(f(this));
	}

	fold<B>(initial: Lazy<B>, pending: Lazy<B>, failure: Function1<L, B>, success: Function1<A, B>): B {
		return success(this.value);
	}

	getOrElse(f: Lazy<A>): A {
		return this.value;
	}

	map<B>(f: Function1<A, B>): RemoteData<B, L> {
		return RemoteDataUtils.success<B, L>(f(this.value));
	}
	/**
	 * Maps over this RemoteData value, producing new Observable
	 */
	map$<B>(f: Function1<A, Observable<RemoteData<B, L>>>): Observable<RemoteData<B, L>> {
		return f(this.value);
	}

	getOrElseValue(value: A): A {
		return this.value;
	}

	reduce<B>(f: Function2<B, A, B>, b: B): B {
		return f(b, this.value);
	}

	traverse<F extends URIS2>(
		F: Applicative<F>,
	): <M, B>(f: Function1<A, HKT2<F, M, B>>) => Type2<F, M, RemoteData<B, L>>;
	traverse<F extends URIS>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => Type<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>> {
		return f => F.map(f(this.value), b => RemoteDataUtils.success<any, any>(b));
	}

	isInitial(): this is RemoteInitial<A, L> {
		return false;
	}

	isPending(): this is RemotePending<A, L> {
		return false;
	}

	isFailure(): this is RemoteFailure<A, L> {
		return false;
	}

	isSuccess(): this is RemoteSuccess<A, L> {
		return true;
	}

	toOption(): Option<A> {
		return some(this.value);
	}

	toNullable(): A | null {
		return this.value;
	}

	exists(p: Predicate<A>): boolean {
		return p(this.value);
	}

	contains(S: Setoid<A>, value: A): boolean {
		return S.equals(this.value, value);
	}

	do(thunk: (value: A) => void): void {
		thunk(this.value);
	}

	filter(p: Predicate<A>): RemoteData<A, L> {
		return p(this.value) ? this : RemoteDataUtils.initial;
	}
}

export class RemotePending<A, L> {
	readonly _URI: URI;
	readonly _A: A;
	readonly _L: L;
	readonly status = RemoteDataStatus.Pending;

	alt(fy: RemoteData<A, L>): RemoteData<A, L> {
		return fy;
	}

	ap<B>(fab: RemoteData<Function1<A, B>, L>): RemoteData<B, L> {
		return this as any;
	}

	chain<B>(f: Function1<A, RemoteData<B, L>>): RemoteData<B, L> {
		return this as any;
	}

	extend<B>(f: Function1<RemoteData<A, L>, B>): RemoteData<B, L> {
		return this as any;
	}

	fold<B>(initial: Lazy<B>, pending: Lazy<B>, failure: Function1<L, B>, success: Function1<A, B>): B {
		return pending();
	}

	getOrElse(f: Lazy<A>): A {
		return f();
	}

	map<B>(f: Function1<A, B>): RemoteData<B, L> {
		return this as any;
	}

	/**
	 * Maps over this RemoteData value, producing new Observable
	 */
	map$<B>(f: Function1<A, Observable<RemoteData<B, L>>>): Observable<RemoteData<B, L>> {
		return of(this as any);
	}

	getOrElseValue(value: A): A {
		return value;
	}

	reduce<B>(f: Function2<B, A, B>, b: B): B {
		return b;
	}

	traverse<F extends URIS2>(
		F: Applicative<F>,
	): <L, B>(f: Function1<A, HKT2<F, L, B>>) => Type2<F, L, RemoteData<B, L>>;
	traverse<F extends URIS>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => Type<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>>;
	traverse<F>(F: Applicative<F>): <B>(f: Function1<A, HKT<F, B>>) => HKT<F, RemoteData<B, L>> {
		return f => F.of(this as any);
	}

	isInitial(): this is RemoteInitial<A, L> {
		return false;
	}

	isPending(): this is RemotePending<A, L> {
		return true;
	}

	isFailure(): this is RemoteFailure<A, L> {
		return false;
	}

	isSuccess(): this is RemoteSuccess<A, L> {
		return false;
	}

	toOption(): Option<A> {
		return none;
	}

	toNullable(): A | null {
		return null;
	}

	exists(p: Predicate<A>): boolean {
		return false;
	}

	contains(S: Setoid<A>, value: A): boolean {
		return false;
	}

	do(thunk: (value: A) => void): void {}

	filter(p: Predicate<A>): RemoteData<A, L> {
		return this;
	}
}

//tslint:enable no-any no-use-before-declare

export type RemoteData<A, L = Error> =
	| RemoteInitial<A, L>
	| RemoteFailure<A, L>
	| RemoteSuccess<A, L>
	| RemotePending<A, L>;

export namespace RemoteDataUtils {
	//constructors
	import setoidStrict = SetoidUtils.setoidStrict;

	// export const
	export const failure = <A, L = Error>(error: L): RemoteData<A, L> => new RemoteFailure<A, L>(error);
	export const success = <A, L = Error>(value: A): RemoteData<A, L> => new RemoteSuccess<A, L>(value);
	export const pending: RemoteData<never, never> = new RemotePending<never, never>();
	export const initial: RemoteData<never, never> = new RemoteInitial<never, never>();

	//filters
	export const isFailure = <A, L>(data: RemoteData<A, L>): data is RemoteFailure<A, L> => data.isFailure();
	export const isSuccess = <A, L>(data: RemoteData<A, L>): data is RemoteSuccess<A, L> => data.isSuccess();
	export const isPending = <A, L>(data: RemoteData<A, L>): data is RemotePending<A, L> => data.isPending();
	export const isInitial = <A, L>(data: RemoteData<A, L>): data is RemoteInitial<A, L> => data.isInitial();

	//Setoid
	export const getSetoid = <A, L>(S: Setoid<A>): Setoid<RemoteData<A, L>> => {
		return {
			equals: (x, y) => {
				return x.fold(
					() => y.isInitial(),
					() => y.isPending(),
					xError => y.fold(constFalse, constFalse, yError => yError === xError, constFalse),
					ax => y.fold(constFalse, constFalse, constFalse, ay => S.equals(ax, ay)),
				);
			},
		};
	};

	export const strictRDSetoid = getSetoid(setoidStrict);
	export const strictRDOptionSetoid = getSetoid(getOptionSetoid(setoidStrict));

	//Monad
	export const of = success;
	export const ap = <L, A, B>(fab: RemoteData<Function1<A, B>, L>, fa: RemoteData<A, L>): RemoteData<B, L> =>
		fa.ap(fab);
	export const map = <L, A, B>(fa: RemoteData<A, L>, f: Function1<A, B>): RemoteData<B, L> => fa.map(f);
	export const chain = <L, A, B>(fa: RemoteData<A, L>, f: Function1<A, RemoteData<B, L>>): RemoteData<B, L> =>
		fa.chain(f);

	//Foldable
	export const reduce = <L, A, B>(fa: RemoteData<A, L>, b: B, f: Function2<B, A, B>): B => fa.reduce(f, b);

	//Alt
	export const alt = <L, A>(fa: RemoteData<A, L>, fb: RemoteData<A, L>): RemoteData<A, L> => fa.alt(fb);

	//Extend
	export const extend = <L, A, B>(fla: RemoteData<A, L>, f: (fla: RemoteData<A, L>) => B): RemoteData<B, L> =>
		fla.extend(f);

	export function fromOption<A, L>(option: Option<A>, error: Lazy<L>): RemoteData<A, L> {
		if (isNone(option)) {
			return failure(error());
		} else {
			return success<A, L>(option.value);
		}
	}

	export function fromEither<A, L>(either: Either<L, A>): RemoteData<A, L> {
		if (isLeft(either)) {
			return failure(either.value);
		} else {
			return success<A, L>(either.value);
		}
	}

	export function toPromise<A, L>(data: RemoteData<A, L>): Promise<A> {
		return new Promise((resolve, reject) => {
			switch (data.status) {
				case RemoteDataStatus.Success: {
					return resolve(data.value);
				}
				case RemoteDataStatus.Failure: {
					return reject(data.error);
				}
			}
		});
	}

	//rx extension
	/**
	 * Maps over Observable's inner RemoteData value
	 */

	export const mapRD: <A, B, L>(
		f: Function1<A, B>,
	) => (context: Observable<RemoteData<A, L>>) => Observable<RemoteData<B, L>> = f => context => {
		return context.pipe(mapp(data => data.map(value => f(value))));
	};

	/**
	 * Maps over Observable's inner RemoteData<Option> value
	 */
	export function mapRDOption<A, B, L>(
		this: Observable<RemoteData<Option<A>, L>>,
		f: Function1<A, B>,
	): Observable<RemoteData<Option<B>, L>> {
		return this.pipe(mapRD(opt => opt.map(f)));
	}

	/**
	 * Chains over Observable's inner RemoteData value
	 */
	export const chainRD: <A, B, L>(
		f: Function1<A, RemoteData<B, L>>,
	) => (context: Observable<RemoteData<A, L>>) => Observable<RemoteData<B, L>> = f => context => {
		return context.pipe(mapp(data => data.chain(value => f(value))));
	};

	/**
	 * Chains over Observable's inner RemoteData<Option> value
	 */
	export function chainRDOption<A, B, L>(
		this: Observable<RemoteData<Option<A>, L>>,
		f: Function1<A, RemoteData<Option<B>, L>>,
	): Observable<RemoteData<Option<B>, L>> {
		return this.pipe(chainRD(opt => opt.foldL(() => success(none), value => f(value) as any)));
	}

	/**
	 * SwithcMaps over Observable's inner RemoteData value
	 */
	export const switchMapRD: <A, B, L>(
		f: Function1<A, Observable<RemoteData<B, L>>>,
	) => (context: Observable<RemoteData<A, L>>) => Observable<RemoteData<B, L>> = f => context => {
		return context.pipe(switchMap(data => data.map$(value => f(value))));
	};

	/**
	 * Applies thunk to inner RemoteData value
	 */
	export function doRD<A, L>(
		this: Observable<RemoteData<A, L>>,
		f: Function1<A, void>,
	): Observable<RemoteData<A, L>> {
		return this.pipe(
			tap(data => {
				if (data.isSuccess()) {
					f(data.value);
				}
			}),
		);
	}

	/**
	 * Applies thunk to inner RemoteData<Option> value
	 */
	export function doRDOption<A, L>(
		this: Observable<RemoteData<Option<A>, L>>,
		f: Function1<A, void>,
	): Observable<RemoteData<Option<A>, L>> {
		return this.pipe(
			tap(data => {
				if (data.isSuccess() && data.value.isSome()) {
					f(data.value.value);
				}
			}),
		);
	}

	/**
	 * Unwraps inner RemoteData filtering only RemoteSuccess values.
	 * Use with caution, resulting observable may not emit any values.
	 */
	export function filterSuccess<A, L>(this: Observable<RemoteData<A, L>>): Observable<A> {
		return this.pipe(
			filter(isSuccess),
			mapp(data => data.value),
		);
	}

	export function withLatestFromRD<A, B, L>(
		this: Observable<RemoteData<A, L>>,
		b: Observable<RemoteData<B, L>>,
	): Observable<RemoteData<[A, B], L>>;

	export function withLatestFromRD<A, B, C, L>(
		this: Observable<RemoteData<A, L>>,
		b: Observable<RemoteData<B, L>>,
		c: Observable<RemoteData<C, L>>,
	): Observable<RemoteData<[A, B, C], L>>;

	export function withLatestFromRD<A, B, C, D, L>(
		this: Observable<RemoteData<A, L>>,
		b: Observable<RemoteData<B, L>>,
		c: Observable<RemoteData<C, L>>,
		d: Observable<RemoteData<D, L>>,
	): Observable<RemoteData<[A, B, C, D], L>>;

	export function withLatestFromRD<A, B, C, D, E, L>(
		this: Observable<RemoteData<A, L>>,
		b: Observable<RemoteData<B, L>>,
		c: Observable<RemoteData<C, L>>,
		d: Observable<RemoteData<D, L>>,
		e: Observable<RemoteData<E, L>>,
	): Observable<RemoteData<[A, B, C, D, E], L>>;

	export function withLatestFromRD<A, L>(
		this: Observable<RemoteData<A, L>>,
		...streams: Observable<RemoteData<A, L>>[]
	): Observable<RemoteData<A[], L>> {
		return this.pipe(
			withLatestFrom(...streams),
			mapp(values => (combine as any)(...(values as any))),
		);
	}

	export function toProperty<A>(this: Observable<A>): Observable<A> {
		return this.pipe(
			distinctUntilChanged(),
			shareReplay(1),
		);
	}

	export function toPropertyRD<A, L>(this: Observable<RemoteData<A, L>>): Observable<RemoteData<A, L>> {
		return this.pipe(
			distinctUntilChanged((a, b) => a === b || strictRDSetoid.equals(a, b)),
			shareReplay(1),
		);
	}

	export function toPropertyRDOption<A, L>(
		this: Observable<RemoteData<Option<A>, L>>,
	): Observable<RemoteData<Option<A>, L>> {
		return this.pipe(
			distinctUntilChanged((a, b) => a === b || strictRDOptionSetoid.equals(a, b)),
			shareReplay(1),
		);
	}
}

export const remoteData: Monad2<URI> & Foldable2<URI> /*& Traversable<URI>*/ & Alt2<URI> & Extend2<URI> = {
	//HKT
	URI,

	//Monad
	of: RemoteDataUtils.success as any,
	ap: RemoteDataUtils.ap,
	map: RemoteDataUtils.map,
	chain: RemoteDataUtils.chain,

	//Foldable
	reduce: RemoteDataUtils.reduce,

	//Alt
	alt: RemoteDataUtils.alt,

	//Extend
	extend: RemoteDataUtils.extend,
};

export namespace RemoteDataUtils {
	export function combine<A, L>(a: RemoteData<A, L>): RemoteData<[A], L>;
	export function combine<A, B, L>(a: RemoteData<A, L>, b: RemoteData<B, L>): RemoteData<[A, B], L>;
	export function combine<A, B, C, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
	): RemoteData<[A, B, C], L>;
	export function combine<A, B, C, D, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
	): RemoteData<[A, B, C, D], L>;
	export function combine<A, B, C, D, E, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
	): RemoteData<[A, B, C, D, E], L>;
	export function combine<A, B, C, D, E, F, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
		f: RemoteData<F, L>,
	): RemoteData<[A, B, C, D, E, F], L>;
	export function combine<A, B, C, D, E, F, G, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
		f: RemoteData<F, L>,
		g: RemoteData<G, L>,
	): RemoteData<[A, B, C, D, E, F, G], L>;
	export function combine<A, B, C, D, E, F, G, H, L>(
		a: RemoteData<A, L>,
		b: RemoteData<B, L>,
		c: RemoteData<C, L>,
		d: RemoteData<D, L>,
		e: RemoteData<E, L>,
		f: RemoteData<F, L>,
		g: RemoteData<G, L>,
		h: RemoteData<H, L>,
	): RemoteData<[A, B, C, D, E, F, G, H], L>;
	export function combine<T, L>(...list: RemoteData<T, L>[]): RemoteData<T[], L> {
		if (list.length === 0) {
			return success<T[], L>(ArrayUtils.empty);
		}
		return sequence(remoteData, array)(list);
	}

	export type SerializedRemoteData<V, R = never> =
		| { status: RemoteDataStatus.Initial }
		| { status: RemoteDataStatus.Pending }
		| { status: RemoteDataStatus.Failure; error: R }
		| { status: RemoteDataStatus.Success; value: V };

	export function deserialize<A = never>(data: SerializedRemoteData<A>): RemoteData<A, never> {
		switch (data.status) {
			case RemoteDataStatus.Initial:
				return initial;
			case RemoteDataStatus.Pending:
				return pending;
			case RemoteDataStatus.Failure:
				return failure(data.error);
			case RemoteDataStatus.Success:
				return success<A, never>(data.value);
		}
	}
}
