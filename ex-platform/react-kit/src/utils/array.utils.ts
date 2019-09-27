import { Function2 } from 'fp-ts/lib/function';

export namespace ArrayUtils {
	export function withPadding<A>(array: A[], total: number, element: A | Function2<number, boolean, A>): A[] {
		array = sliceArray(array, total);

		for (let i = array.length; i < total; i++) {
			if (element instanceof Function && typeof element === 'function') {
				array.push(element(i, i === total));
			} else {
				array.push(element);
			}
		}

		return array;
	};

	function sliceArray<A>(array: A[], total: number): A[] {
		if (array.length > total) {
			array.slice(0, total);
		}

		return array;
	};
}
