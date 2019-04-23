import { ObservableSet } from '../observable-set.utils';

type Item = {
	id: number;
	name: string;
};

describe('Observable-set.utils', () => {
	describe('ReactiveSet', () => {
		let set: ObservableSet<Item>;
		let item1: Item = { id: 1, name: 'first' };
		let item2: Item = { id: 2, name: 'second' };

		beforeEach(() => {
			set = new ObservableSet();
		});

		describe('size', () => {
			it('should be empty', () => {
				expect(set.size).toBe(0);
			});

			it('should have one value', () => {
				set.add(item1);

				expect(set.size).toBe(1);
			});

			it('should delete unexisting items', () => {
				expect(set.delete(item2)).toBe(false);

				expect(set.size).toBe(0);
			});
		});

		describe('delete', () => {
			it('should delete existing item', () => {
				set.add(item1);

				expect(set.delete(item1)).toBe(true);

				expect(set.size).toBe(0);
			});

			it('should not delete unexisting item', () => {
				expect(set.delete(item2)).toBe(false);

				expect(set.size).toBe(0);
			});

			it('should delete unexisting items', () => {
				expect(set.deleteItems([item1, item2])).toEqual([false, false]);

				expect(set.size).toBe(0);
			});
		});

		describe('has', () => {
			it('should have added item', () => {
				set.add(item1);
				expect(set.has(item1)).toBe(true);
			});
			it('should not have dont added item', () => {
				set.add(item1);
				expect(set.has(item2)).toBe(false);
			});
		});

		describe('get', () => {
			it('should return added file', () => {
				set.add(item1);
				expect(set.get(item1)).toEqual(item1);
			});

			it('should return not added file', () => {
				set.add(item1);
				expect(set.get(item2)).toBeUndefined();
			});
		});

		describe('toArray', () => {
			it('should return added files', () => {
				const src = [item1, item1, item2];
				const expected = [item1, item2];

				set.addItems(src);

				expect(set.toArray()).toEqual(expected);
				expect(set.size).toBe(2);
			});

			it('should return added files', () => {
				const src: Item[] = [];
				const expected = src;

				set.addItems(src);

				expect(set.toArray()).toEqual(expected);
				expect(set.size).toBe(0);
			});
		});

		describe('clear', () => {
			it('should clear', () => {
				const src = [item1, item2];

				set.addItems(src);

				expect(set.size).toBe(2);

				set.clear();

				expect(set.size).toBe(0);
			});
		});
	});
});
