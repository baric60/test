import { Reader, asks } from 'fp-ts/lib/Reader';
import { Omit } from 'typelevel-ts';

export namespace ReaderUtils {
	/**
	 * Modifies env of computation `r` replacing its keys with keys returned from `f`
	 */
	export const local = <E extends object, E3 extends Partial<E>, A, E2 extends object = never>(
		r: Reader<E, A>,
		f: (e2: E2) => E3,
	): Reader<E2 & Omit<E, keyof E3>, A> => asks(e2 => r.run(Object.assign({}, e2, f(e2)) as any));

	/**
	 * Splits a reader into two nested readers partially providing environment based on keys
	 */
	export const defer = <E extends object, K extends keyof E, A>(
		r: Reader<E, A>,
		keys: K[],
	): Reader<Omit<E, K>, Reader<{ [P in K]: E[P] }, A>> =>
		asks(e => asks(e2 => r.run(Object.assign({}, e2, e) as any)));

	export type Project1<E, A, R> = (a: A, e: E) => R;
	export type Project2<E, A, B, R> = (a: A, b: B, e: E) => R;
	export type Project3<E, A, B, C, R> = (a: A, b: B, c: C, e: E) => R;
	export type Project4<E, A, B, C, D, R> = (a: A, b: B, c: C, d: D, e: E) => R;
	export type Project5<E, A, B, C, D, F, R> = (a: A, b: B, c: C, d: D, f: F, e: E) => R;
	export type Project6<E, A, B, C, D, F, G, R> = (a: A, b: B, c: C, d: D, f: F, g: G, e: E) => R;
	export type Project7<E, A, B, C, D, F, G, H, R> = (a: A, b: B, c: C, d: D, f: F, g: G, h: H, e: E) => R;
	export type Project8<E, A, B, C, D, F, G, H, I, R> = (a: A, b: B, c: C, d: D, f: F, g: G, h: H, i: I, e: E) => R;
	export type Project9<E, A, B, C, D, F, G, H, I, J, R> = (
		a: A,
		b: B,
		c: C,
		d: D,
		f: F,
		g: G,
		h: H,
		i: I,
		j: J,
		e: E,
	) => R;

	export type ProjectMany<E, A, R> = (...args: Array<A[] | E>) => R;

	export function combine<E extends object, A, R>(a: Reader<E, A>, project: Project1<E, A, R>): Reader<E, R>;
	export function combine<EA extends object, A, EB extends object, B, R>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		project: Project2<EA & EB, A, B, R>,
	): Reader<EA & EB, R>;
	export function combine<EA extends object, A, EB extends object, B, EC extends object, C, R>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		project: Project3<EA & EB & EC, A, B, C, R>,
	): Reader<EA & EB & EC, R>;
	export function combine<EA extends object, A, EB extends object, B, EC extends object, C, ED extends object, D, R>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		d: Reader<ED, D>,
		project: Project4<EA & EB & EC & ED, A, B, C, D, R>,
	): Reader<EA & EB & EC & ED, R>;
	export function combine<
		EA extends object,
		A,
		EB extends object,
		B,
		EC extends object,
		C,
		ED extends object,
		D,
		EF extends object,
		F,
		R
	>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		d: Reader<ED, D>,
		f: Reader<EF, F>,
		project: Project5<EA & EB & EC & ED & EF, A, B, C, D, F, R>,
	): Reader<EA & EB & EC & ED & EF, R>;
	export function combine<
		EA extends object,
		A,
		EB extends object,
		B,
		EC extends object,
		C,
		ED extends object,
		D,
		EF extends object,
		F,
		EG extends object,
		G,
		R
	>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		d: Reader<ED, D>,
		f: Reader<EF, F>,
		g: Reader<EG, G>,
		project: Project6<EA & EB & EC & ED & EF & EG, A, B, C, D, F, G, R>,
	): Reader<EA & EB & EC & ED & EF & EG, R>;
	export function combine<
		EA extends object,
		A,
		EB extends object,
		B,
		EC extends object,
		C,
		ED extends object,
		D,
		EF extends object,
		F,
		EG extends object,
		G,
		EH extends object,
		H,
		R
	>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		d: Reader<ED, D>,
		f: Reader<EF, F>,
		g: Reader<EG, G>,
		h: Reader<EH, H>,
		project: Project7<EA & EB & EC & ED & EF & EG & EH, A, B, C, D, F, G, H, R>,
	): Reader<EA & EB & EC & ED & EF & EG & EH, R>;
	export function combine<
		EA extends object,
		A,
		EB extends object,
		B,
		EC extends object,
		C,
		ED extends object,
		D,
		EF extends object,
		F,
		EG extends object,
		G,
		EH extends object,
		H,
		EI extends object,
		I,
		R
	>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		d: Reader<ED, D>,
		f: Reader<EF, F>,
		g: Reader<EG, G>,
		h: Reader<EH, H>,
		i: Reader<EI, I>,
		project: Project8<EA & EB & EC & ED & EF & EG & EH & EI, A, B, C, D, F, G, H, I, R>,
	): Reader<EA & EB & EC & ED & EF & EG & EH & EI, R>;
	export function combine<
		EA extends object,
		A,
		EB extends object,
		B,
		EC extends object,
		C,
		ED extends object,
		D,
		EF extends object,
		F,
		EG extends object,
		G,
		EH extends object,
		H,
		EI extends object,
		I,
		EJ extends object,
		J,
		R
	>(
		a: Reader<EA, A>,
		b: Reader<EB, B>,
		c: Reader<EC, C>,
		d: Reader<ED, D>,
		f: Reader<EF, F>,
		g: Reader<EG, G>,
		h: Reader<EH, H>,
		i: Reader<EI, I>,
		j: Reader<EJ, J>,
		project: Project9<EA & EB & EC & ED & EF & EG & EH & EI & EJ, A, B, C, D, F, G, H, I, J, R>,
	): Reader<EA & EB & EC & ED & EF & EG & EH & EI & EJ, R>;
	export function combine<E, A, R>(...args: Array<Reader<E, A> | ProjectMany<E, A, R>>): Reader<E, R> {
		// ts makes sure args has at least two elements
		const readers: Reader<E, A>[] = args.slice(0, args.length - 1) as any; //typesafe
		const project: ProjectMany<E, A, R> = args[args.length - 1] as any; //typesafe
		return asks((e: E) => project(...(readers.map(r => r.run(e)) as any), e));
	}
}
