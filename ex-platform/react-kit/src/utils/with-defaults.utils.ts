import { ComponentType } from 'react';
import { PartialKeys } from '../utils/object.utils';

export const withDefaults = <P extends object, Keys extends keyof P>(
	defaults: object,
): ((Target: ComponentType<P>) => ComponentType<PartialKeys<P, Keys>>) => Target => {
	Target.defaultProps = Object.assign({}, Target.defaultProps || {}, defaults);
	return Target as any;
};
