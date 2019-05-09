import * as React from 'react';
import { FunctionComponent } from 'react';
import {
	StyledComponent,
	StyledInput,
	TStyledComponentProps,
	TStyledInputProps,
} from 'ex-platform/dist/utils/styled.utils';

export const DivStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent {...props} />;
export const PrintStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent as="p" {...props} />;
export const ListStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent as="ul" {...props} />;
export const ListItemStyled: FunctionComponent<TStyledComponentProps> = props => <StyledComponent as="li" {...props} />;
export const InputStyled: FunctionComponent<TStyledInputProps> = props => <StyledInput {...props} />;
