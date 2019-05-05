import * as React from 'react';
import { FunctionComponent } from 'react';
import { Button as ExButton, TButtonProps } from 'ex-platform/react-kit/src/components/button/button.component';
import { SimpleIcon } from '../icons/simple/simple-icon.component';
export { TButtonProps } from 'ex-platform/react-kit/src/components/button/button.component';

const icon = <SimpleIcon>Hello!</SimpleIcon>;

export const Button: FunctionComponent<any> = props => <ExButton {...props} icon={icon} />;
