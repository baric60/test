import * as React from 'react';
import { ReaderUtils } from '../../../../common/utils/reader.utils';
import combine = ReaderUtils.combine;
import { asks, ask, URI } from 'fp-ts/lib/reader';
import { TLocalStorage, LocalStorage } from '../../../services/storage/storage.service';
import { WithRxUtils, WithRXSelector } from '../../../../common/utils/with-utils';
import withRX = WithRxUtils.withRX;
import { merge } from 'rxjs';
import { compose } from 'fp-ts/lib/function';
import { withDefaults } from '../../../../common/utils/with-defaults.utils';
import { TApplicationProps, Application } from '../../components/application/application.component';

type TApplicationContext = {
	localStorage: TLocalStorage;
};

type Defaults = 'name';
const defaults = withDefaults<TApplicationProps, Defaults>({
	name: '',
});

const FooContainer = asks((context: TApplicationContext) => {
	const rx = withRX<TApplicationProps>(() => {
		return merge();
	});

	const enhance = compose(
		defaults,
		rx,
	);

	const app = enhance(Application);

	return app;
});

const result2 = combine(FooContainer, ask(), (Container, context) => {
	return Container;
});

export const resolvedContainer = result2.run({
	localStorage: LocalStorage,
});
