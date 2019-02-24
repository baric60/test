import * as React from 'react';
import {
	CustomStyledClass,
	StyledInputClass,
	TCustomStyledClassProps,
	TStyledInputProps,
} from '../../../../ex-platform/src//utils/styled.utils';

export const DivStyled = (props: TCustomStyledClassProps) => <CustomStyledClass {...props} />;
export const PrintStyled = (props: TCustomStyledClassProps) => <CustomStyledClass as="p" {...props} />;
export const ListStyled = (props: TCustomStyledClassProps) => <CustomStyledClass as="ul" {...props} />;
export const ListItemStyled = (props: TCustomStyledClassProps) => <CustomStyledClass as="li" {...props} />;
export const InputStyled = (props: TStyledInputProps) => <StyledInputClass {...props} />;
export const CheckboxStyled = (props: TStyledInputProps) => <StyledInputClass type="checkbox" {...props} />;
