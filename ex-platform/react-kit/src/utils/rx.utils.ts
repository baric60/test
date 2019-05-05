import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const toKeyValue = <A, Key extends string>(key: string) => (
	target: Observable<A>,
): Observable<{ [K in Key]: A }> => {
	return target.pipe(
		map((value: A) => ({
			[key as string]: value,
		})),
	) as Observable<{ [K in Key]: A }>;
};

declare module 'rxjs/operators' {
	interface Observable<T> {
		toKeyValue: typeof toKeyValue;
	}
}
