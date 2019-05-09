import { asks } from 'fp-ts/lib/reader';
import { compose } from 'fp-ts/lib/function';
import { customWithDefaults } from 'ex-platform/dist/utils/with-defaults.utils';
import { LayoutComponent, TLayoutProps } from '../../components/layout/layout.component';
import { WithRxUtils } from 'ex-platform/dist/utils/with-utils';
import withRX = WithRxUtils.withRX;
import { merge, of } from 'rxjs';
import { toKeyValue } from 'ex-platform/dist/utils/rx.utils';

export type LayoutContext = {
	// localStorage: number;
};

export const LayoutContainer = asks((ctx: LayoutContext) => {
	const name$ = of('string');

	const defaults = customWithDefaults<TLayoutProps>({
		name: '',
	});

	const rx = withRX<TLayoutProps>(() => {
		return merge(name$.pipe(toKeyValue('name')));
	});

	const enhance = compose(
		defaults,
		rx,
	);

	return enhance(LayoutComponent);
});
