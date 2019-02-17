import React from 'react';
import { Component } from 'react';
import * as css from './theme/button.child.styl';

export type TButtonProps = {
	theme: any;
	disabled: boolean;
};

class RawButton extends Component<TButtonProps, {}> {
	public render(): React.ReactNode {
		const { theme } = this.props;
		return <div className={theme.container} />;
	}
}
