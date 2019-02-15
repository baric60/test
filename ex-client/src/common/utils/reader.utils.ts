import { asks, Reader } from 'fp-ts/lib/reader';
import { Omit } from 'typelevel-ts';

export type ProjectMany<E, A, R> = (...args: Array<A[] | E>) => R;

export namespace ReaderUtils {
	export function combine<E, A, R>(...args: Array<Reader<E, A> | ProjectMany<E, A, R>>): Reader<E, R> {
		const readers: Reader<E, A>[] = args.slice(0, args.length - 1) as any; //typesafe
		const project: ProjectMany<E, A, R> = args[args.length - 1] as any; //typesafe
		return asks((e: E) => project(...(readers.map(r => r.run(e)) as any), e));
	}

	export const defer = <E extends object, K extends keyof E, A>(
		r: Reader<E, A>,
		keys: string[],
	): Reader<Omit<E, K>, Reader<{ [P in K]: E[P] }, A>> =>
		asks(e => asks(e2 => r.run(Object.assign({}, e2, e) as any)));
}
