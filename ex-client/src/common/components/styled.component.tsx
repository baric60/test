import * as React from 'react';
import { SFC } from 'react';
import {
	CustomStyledClass,
	StyledInputClass,
	TCustomStyledClassProps,
	TStyledInputProps,
} from '../../../../ex-platform/src//utils/styled.utils';

export const DivStyled: SFC<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass {...props} />
);
export const PrintStyled: SFC<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass as="p" {...props} />
);
export const ListStyled: SFC<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass as="ul" {...props} />
);
export const ListItemStyled: SFC<TCustomStyledClassProps> = (props: TCustomStyledClassProps) => (
	<CustomStyledClass as="li" {...props} />
);
export const InputStyled: SFC<TStyledInputProps> = (props: TStyledInputProps) => <StyledInputClass {...props} />;
export const CheckboxStyled: SFC<TStyledInputProps> = (props: TStyledInputProps) => (
	<StyledInputClass type="checkbox" {...props} />
);
