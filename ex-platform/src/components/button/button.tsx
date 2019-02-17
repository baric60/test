import { Component } from 'react';
import buttonTheme from './theme/button.styl';

export type TButtonProps = {
	theme: any;
	disabled: boolean;
};

class RawButton extends Component<TButtonProps> {
	public render(): React.ReactNode {
		const { theme } = this.props;
		return <div className={theme.container} />;
	}
}
