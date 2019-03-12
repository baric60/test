import * as React from 'react';
import { FunctionComponent } from 'react';
import {
	CustomStyledClass,
	StyledInputClass,
	TCustomStyledClassProps,
	TStyledInputProps,
} from '../../../../ex-platform/src//utils/styled.utils';

export const DivStyled: FunctionComponent<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass {...props} />
);
export const PrintStyled: FunctionComponent<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass as="p" {...props} />
);
export const ListStyled: FunctionComponent<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass as="ul" {...props} />
);
export const ListItemStyled: FunctionComponent<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass as="li" {...props} />
);
export const InputStyled: FunctionComponent<TStyledInputProps> = (props: TStyledInputProps) => (
	<StyledInputClass {...props} />
);
export const CheckboxStyled: FunctionComponent<TStyledInputProps> = (props: TStyledInputProps) => (
	<StyledInputClass type="checkbox" {...props} />
);
