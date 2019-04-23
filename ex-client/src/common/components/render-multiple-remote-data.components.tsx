import * as React from 'react';
import { Component } from 'react';
import { RemoteData } from 'ex-platform/src/utils/remote-data.utils';
import { findFirst } from 'fp-ts/lib/Array';

type TMultipleRemoteData<A> = {
	datas: RemoteData<A>[];
	success: (data: RemoteData<A>[]) => React.ReactNode;
};

class MultipleRemoteData<A> extends Component<TMultipleRemoteData<A>, {}> {
	render() {
		console.log(this.props.datas);
		const { success, datas } = this.props;
		const isFailure = datas.every(data => data.isFailure());

		return (
			<div>
				{isFailure && this.renderError()}
				<div>{success(datas)}</div>
			</div>
		);
	}

	renderError() {
		return <div>Error!</div>;
	}
}

export type TRenderMultipleRemoteData<A> = {
	datas: RemoteData<A>[];
	success: (data: RemoteData<A>[]) => React.ReactNode;
};

export const RenderMultipleRemoteData: <A>(props: TRenderMultipleRemoteData<A>) => React.ReactNode = props => (
	<MultipleRemoteData {...props} />
);
