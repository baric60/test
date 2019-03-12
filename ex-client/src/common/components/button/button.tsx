import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button as ExButton, TButtonProps } from '../../../../../ex-platform/src/components/button/button';
import { SimpleIcon } from '../icons/simple/simple-icon.component';

const icon = <SimpleIcon>Hello!</SimpleIcon>;

export const Button: FunctionComponent<TButtonProps> = props => <ExButton {...props} icon={icon} />;
