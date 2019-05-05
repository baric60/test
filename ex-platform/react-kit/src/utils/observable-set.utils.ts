import { BehaviorSubject, Observable } from 'rxjs';

export type ObservableSetEntity<V> = {
	value: V;
	observable: Observable<V>;
	subject: BehaviorSubject<V>;
	hasValue: boolean;
};

export class ObservableSet<V> {
	private cache = new Set<V>();
	private sources = new Array<ObservableSetEntity<V>>();

	get size(): number {
		return this.cache.size;
	}

	public add: (item: V) => void = item => {
		const cached = this.getOrCreateEntity(item);

		if (!this.has(item) && cached.hasValue === false) {
			this.cache.add(item);
			this.sources.push(cached);
		}
	};

	public addItems: (items: V[]) => void = items => {
		items.map(item => this.add(item));
	};

	public delete: (item: V) => boolean = item => {
		const cached = this.getOrCreateEntity(item);

		this.sources = this.sources.filter(entity => entity.value !== item);

		return this.cache.delete(item);
	};

	public deleteItems: (items: V[]) => boolean[] = items => {
		return items.map(item => this.delete(item));
	};

	public get: (item: V) => V = item => {
		const array = this.toArray();

		return array.find(element => element === item);
	};

	public has: (item: V) => boolean = item => {
		return this.cache.has(item);
	};

	public toArray: () => V[] = () => {
		const array = new Array();
		this.cache.forEach(item => array.push(item));
		return array;
	};

	public getSubscribe(item: V): BehaviorSubject<V> {
		const source = this.sources.find(entity => entity.value === item);
		return source.subject;
	}

	public clear: () => void = () => {
		this.cache.clear();
	};

	private getOrCreateEntity: (item: V) => ObservableSetEntity<V> = item => {
		// const cached = this.get(item);
		// if (cached) {
		// 	return cached;
		// }
		const subject = new BehaviorSubject<V>(item);
		const observable = subject;

		return {
			value: item,
			observable,
			subject,
			hasValue: false,
		};
	};
}
