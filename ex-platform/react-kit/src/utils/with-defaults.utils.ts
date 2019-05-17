import { ComponentType } from 'react';

export const customWithDefaults: <D extends object>(
	defaultProps: D,
) => (component: ComponentType<Partial<D>>) => ComponentType<Partial<D>> = defaultProps => component => {
	component.defaultProps = { ...component.defaultProps, ...defaultProps };
	return component;
};

// export const withDefaults = <P extends object, Keys extends keyof P>(
// 	defaults: Pick<P, Keys>,
// ): ((Target: ComponentType<P>) => ComponentType<PartialKeys<P, Keys>>) => Target => {
// 	Target.defaultProps = Object.assign({}, Target.defaultProps || {}, defaults); // tslint:disable-line
// 	return Target as any; // tslint:disable-line
// };
