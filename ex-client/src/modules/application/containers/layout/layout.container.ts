import { asks } from 'fp-ts/lib/reader';
import { compose } from 'fp-ts/lib/function';
import { withDefaults } from '../../../../common/utils/with-defaults.utils';
import { LayoutComponent, TLayoutComponentProps } from '../../components/layout/layout.component';
import { WithRxUtils } from '../../../../common/utils/with-utils';
import withRX = WithRxUtils.withRX;
import { merge } from 'rxjs';

export type LayoutContext = {
	// localStorage: number;
};

type Defaults = 'name';

export const LayoutContainer = asks((ctx: LayoutContext) => {
	const defaults = withDefaults<TLayoutComponentProps, Defaults>({
		name: '',
	});

	const rx = withRX<TLayoutComponentProps>(() => {
		return merge();
	});

	const enhance = compose(
		defaults,
		rx,
	);

	return enhance(LayoutComponent);
});
