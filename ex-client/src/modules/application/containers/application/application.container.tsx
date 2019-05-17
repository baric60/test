import { ReaderUtils } from 'ex-platform/dist/utils/reader.utils';
import combine = ReaderUtils.combine;
import { TLocalStorage, LocalStorage } from '../../../services/storage/storage.service';
import { WithRxUtils } from 'ex-platform/dist/utils/with-utils';
import withRX = WithRxUtils.withRX;
import { merge, of } from 'rxjs';
import { compose } from 'fp-ts/lib/function';
import { withDefaults } from 'ex-platform/dist/utils/with-defaults.utils';
import { TApplicationProps, ApplicationComponent } from '../../components/application/application.component';
import { toKeyValue } from 'ex-platform/dist/utils/rx.utils';

type TApplicationContext = {
	localStorage: TLocalStorage;
};

type Defaults = 'color';
const defaults = withDefaults({
	color: 'aaa',
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

	return enhance(ApplicationComponent as any);
});

export const resolvedContainer = FooContainer.run({
	localStorage: LocalStorage,
});
