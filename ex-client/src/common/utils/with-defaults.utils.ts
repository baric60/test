import { ComponentType } from 'react';
import { Omit } from 'lodash';

export declare type PartialKeys<T extends {}, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export function withDefaults<P extends object, Keys extends keyof P>(
	defaults: Pick<P, Keys>,
): (Target: ComponentType<P>) => any {
	return Target => {
		// Target.defaultProps = Object.assign({}, Target.defaultProps || {}, defaults);
		return Target as any;
	};
}
