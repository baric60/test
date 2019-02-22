import * as React from 'react';
import { StyledUtils } from '../../../../common/utils/styled.utils';
import { LayoutContainer } from '../../containers/layout/layout.container';
import { ReaderUtils } from '../../../../common/utils/reader.utils';
import { theme, TApplicationTheme } from './theme/application.sass';

export type TApplicationProps = {
	name: string;
	theme: TApplicationTheme;
};
export const ApplicationComponent = ReaderUtils.combine(LayoutContainer, LayoutContainer => {
	class RawApplication extends React.Component<TApplicationProps, {}> {
		render() {
			console.log(this.props);

			return (
				<div>
					<LayoutContainer />
				</div>
			);
		}
	}

	return StyledUtils.withTheme(theme)(RawApplication);
});
