import { create } from 'domain';
import { asks } from 'fp-ts/lib/reader';

export type TLocalStorage = {
	name: string;
};

export namespace LocalStorage {
	export const name = 'const';
}
