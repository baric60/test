import * as React from 'react';
import { FunctionComponent } from "react";
import { TStyledComponentProps, StyledComponent } from '../../utils/styled.utils';

export const DivStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent {...props} />;
export const ListStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent as="ul" {...props} />;
export const LiStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent as="li" {...props} />;

