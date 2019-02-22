import * as React from 'react';
import { Component } from 'react';
import { StyledUtils } from '../../../../common/utils/styled.utils';

export type TLayoutComponentProps = {
	name: string;
};

class RawLayoutComponent extends Component<TLayoutComponentProps, {}> {
	render() {
		return <div />;
	}
}

export const LayoutComponent = StyledUtils.withTheme({})(RawLayoutComponent);
