import { ReaderUtils } from '../../../../common/utils/reader.utils';
import combine = ReaderUtils.combine;
import { TLocalStorage, LocalStorage } from '../../../services/storage/storage.service';
import { WithRxUtils } from '../../../../common/utils/with-utils';
import withRX = WithRxUtils.withRX;
import { merge, of } from 'rxjs';
import { compose } from 'fp-ts/lib/function';
import { withDefaults } from '../../../../../../ex-platform/src/utils/with-defaults.utils';
import { TApplicationProps, ApplicationComponent } from '../../components/application/application.component';
import { map } from 'rxjs/operators';
import { toKeyValue } from '../../../../../../ex-platform/src/utils/rx.utils';
import { ask } from 'fp-ts/lib/Reader';

type TApplicationContext = {
	localStorage: TLocalStorage;
};

type Defaults = 'name';
const defaults = withDefaults<TApplicationProps, Defaults>({
	name: 'aaa',
});

const FooContainer = combine(ApplicationComponent, ApplicationComponent => {
	const name$ = of('string');

	const rx = withRX<TApplicationProps>(() => {
		return merge(name$.pipe(toKeyValue('name')));
	});

	const enhance = compose(
		defaults,
		rx,
	);

	return enhance(ApplicationComponent);
});

const result2 = combine(FooContainer, Container => {
	return Container;
});

export const resolvedContainer = result2.run({
	localStorage: LocalStorage,
});
