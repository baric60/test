import * as React from 'react';
import { asks } from 'fp-ts/lib/reader';

export type LayoutContext = {
	// localStorage: number;
};

export const LayoutContainer = asks((ctx: LayoutContext) => {
	return React.createElement('span');
});
