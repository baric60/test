import * as React from 'react';
import { RemoteDataUtils } from '../../../../common/utils/remote-data.utils';
import { MultipleRemoteDataUtils } from '../../../../common/utils/multiple-remote-data.utils';
import { RenderMultipleRemoteData } from '../../../../common/components/render-multiple-remote-data.components';
import * as applicationCss from './theme/application.styl';
import { StyledUtils } from '../../../../common/utils/styled.utils';

export type TApplicationProps = {
	name: string;
	className: string;
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

		return (
			<div className={this.props.className}>
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

console.log(applicationCss);

const styles = {
	'font-family': 'Helvetica',
	'font-weight': 'bold',
	'font-size': '1.8rem',
};

export const Application = StyledUtils.styledComponent(styles)(ApplicationComponent);
