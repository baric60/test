import { ComponentClass } from 'react';
import styled, { CSSObject, StyledComponent } from 'styled-components';

export namespace StyledUtils {
	export const styledComponent: <P extends Object>(
		styles: CSSObject,
	) => (component: ComponentClass) => StyledComponent<ComponentClass, P> = styles => target => styled(target)(styles);
}
