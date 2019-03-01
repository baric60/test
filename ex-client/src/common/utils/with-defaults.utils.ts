import { ComponentType, ComponentClass } from 'react';
import { PartialKey } from './object.utils';

export function withDefaults<P extends object, Keys extends keyof P>(
	defaults: P,
): (Target: ComponentClass<P>) => ComponentType<PartialKey<P, Keys>> {
	return Target => {
		Target.defaultProps = Object.assign({}, Target.defaultProps || {}, defaults);
		return Target;
	};
}
