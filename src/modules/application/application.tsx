import * as React from 'react';
import { BehaviorSubject } from 'rxjs';
import { ApplicationService } from '../services/application/application.service';
import { reader, ask, asks, Reader } from 'fp-ts/lib/reader';

export type TApplicationProps = {};
export type TApplicationState = {
	data$: BehaviorSubject<string>;
};

type TApplicationContext = {
	name: string;
	id: number;
	service: any;
};

export class Application extends React.Component<TApplicationProps, TApplicationState> {
	readonly state: TApplicationState = {
		data$: ApplicationService.data$,
	};

	render() {
		const context: TApplicationContext = {
			name: 'Alexey',
			id: 396,
			service: ApplicationService,
		};
		const read = reader.of(1);
		const read2 = read
			.map(item => {
				return item + 2;
			})
			.chain(item => {
				console.log(item);
				const conf = ask<TApplicationContext>();
				console.log(conf);
				return conf.map(c => c.id + item);
			});
		const output = read2.run(context);
		console.log(output);
		this.getContext();
		return <div>Hello!</div>;
	}

	private getContext: () => void = () => {
		const read = reader.of(1);

		this.defer(read);
	};

	private defer: (r: any) => void = r => {
		asks(e => {
			r.run();
			console.log(r);
			return e;
		});
	};
}
