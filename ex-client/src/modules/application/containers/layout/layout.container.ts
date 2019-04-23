import { asks } from 'fp-ts/lib/reader';
import { compose } from 'fp-ts/lib/function';
import { withDefaults } from 'ex-platform/src/utils/with-defaults.utils';
import { LayoutComponent, TLayoutComponentProps } from '../../components/layout/layout.component';
import { WithRxUtils } from 'ex-platform/src/utils/with-utils';
import withRX = WithRxUtils.withRX;
import { merge, of } from 'rxjs';
import { toKeyValue } from 'ex-platform/src/utils/rx.utils';

export type LayoutContext = {
	// localStorage: number;
};

type Defaults = 'name';

export const LayoutContainer = asks((ctx: LayoutContext) => {
	const name$ = of('string');

	const defaults = withDefaults<TLayoutComponentProps, Defaults>({
		name: '',
	});

	const rx = withRX<TLayoutComponentProps>(() => {
		return merge(name$.pipe(toKeyValue('name')));
	});

	const enhance = compose(
		defaults,
		rx,
	);

	return enhance(LayoutComponent);
});
