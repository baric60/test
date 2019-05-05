import * as React from 'react';
import { FunctionComponent } from 'react';

export const Icon: FunctionComponent<JSX.IntrinsicAttributes> = props => {
	return <i>{props.children}</i>;
};
