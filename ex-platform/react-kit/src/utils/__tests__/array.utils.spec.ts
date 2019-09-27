import { ArrayUtils } from '../array.utils';
import { some, Option } from 'fp-ts/lib/Option';
import withPadding = ArrayUtils.withPadding;

describe('array.utils', () => {
    describe('withPadding', () => {
        it('should return original array', () => {
            const value = [1, 2, 3, 4];
            const result = withPadding<number>(value, value.length, (index) => index + 1);
            const expected = value;

            expect(result).toEqual(expected);
        });

        it('should add fifth element', () => {
            const value = [1, 2, 3, 4];
            const result = withPadding<number>(value, 5, 6);
            const expected = [1, 2, 3, 4, 6];

            expect(result).toEqual(expected);
        });

        it('should add one element which return callback function', () => {
            const value = [1, 2, 3, 4];
            const result = withPadding<number>(value, 5, index => index + 1);
            const expected = [1, 2, 3, 4, 5];

            expect(result).toEqual(expected);
        });

        it('should add one option in array', () => {
            const value = [some(0), some(1), some(2), some(3)];
            const result = withPadding<Option<number>>(value, 5, some);
            const expected = [some(0), some(1), some(2), some(3), some(4)];

            expect(result).toEqual(expected);
        });

        it('should slice array by limit and return array with one element', () => {
            const value = [1, 2, 3, 4];
            const limit = 1;
            const result = withPadding<number>(value, limit, 1);
            const expected = [1];

            expect(result).toEqual(expected);
        });
    });
});
