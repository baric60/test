import * as React from 'react';
import { RemoteDataUtils } from '../../../../common/utils/remote-data.utils';
import { MultipleRemoteDataUtils } from '../../../../common/utils/multiple-remote-data.utils';
import { RenderMultipleRemoteData } from '../../../../common/components/render-multiple-remote-data.components';
import { StyledUtils } from '../../../../common/utils/styled.utils';
import { PartialKeys } from '../../../../common/utils/with-defaults.utils';

export type TApplicationProps = {
	name: string;
	theme: PartialKeys<any, any>;
};
export type TApplicationState = {};

class ApplicationComponent extends React.Component<TApplicationProps, TApplicationState> {
	render() {
		const data1 = RemoteDataUtils.success(1);
		const data2 = RemoteDataUtils.success(true);
		const data3 = RemoteDataUtils.failure(new Error());
		const data4 = RemoteDataUtils.success(true);
		const datas = MultipleRemoteDataUtils.concat(data1, data2, data3, data4);

		console.log(datas);

		console.log(this.props);

		const theme = {};

		return (
			<div>
				aaa
				{/* {RenderMultipleRemoteData({
					datas,
					success: ([data1, data2, data3]) => {
						return <div />;
					},
				})} */}
			</div>
		);
	}
}

const styles = {
	'font-family': 'Helvetica',
	'font-weight': 'bold',
	'font-size': '1.8rem',
};

const theme = {
	container: styles,
};

// export const Application = StyledUtils.styledComponent(styles)(ApplicationComponent);
export const Application = StyledUtils.withTheme(theme)(ApplicationComponent);
