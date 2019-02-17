import * as React from 'react';
import { RemoteDataUtils } from '../../../../common/utils/remote-data.utils';
import { MultipleRemoteDataUtils } from '../../../../common/utils/multiple-remote-data.utils';
import { RenderMultipleRemoteData } from '../../../../common/components/render-multiple-remote-data.components';
import * as applicationCss from './theme/application.styl';

export type TApplicationProps = {
	name: string;
};
export type TApplicationState = {};

export class Application extends React.Component<TApplicationProps, TApplicationState> {
	render() {
		const data1 = RemoteDataUtils.success(1);
		const data2 = RemoteDataUtils.success(true);
		const data3 = RemoteDataUtils.failure(new Error());
		const data4 = RemoteDataUtils.success(true);
		const datas = MultipleRemoteDataUtils.concat(data1, data2, data3, data4);

		console.log(datas);
		console.log(applicationCss);

		return (
			<div>
				{RenderMultipleRemoteData({
					datas,
					success: ([data1, data2, data3]) => {
						return <div />;
					},
				})}
			</div>
		);
	}
}
