import { ComponentType } from 'react';

export const withDefaults: <D extends object>(
	defaultProps: D,
) => (component: ComponentType<Partial<D>>) => ComponentType<Partial<D>> = defaultProps => component => {
	component.defaultProps = { ...component.defaultProps, ...defaultProps };
	return component;
};