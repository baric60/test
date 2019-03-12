import { ComponentClass } from 'react';
import { PartialKey } from '../../../ex-client/src/common/utils/object.utils';

export function withDefaults<P extends object, Keys extends keyof P>(
	defaults: P,
): (Target: ComponentClass<P>) => ComponentClass<PartialKey<P, Keys>> {
	return Target => {
		Target.defaultProps = Object.assign({}, Target.defaultProps || {}, defaults);
		return Target;
	};
}
