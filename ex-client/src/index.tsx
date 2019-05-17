import * as React from 'react';
import { ComponentType } from 'react';
import * as ReactDOM from 'react-dom';
import { resolvedContainer } from './modules/application/containers/application/application.container';

const root = document.getElementById('root');

const render = (Component: ComponentType) => {
	let container = <Component />;

	ReactDOM.render(container, root);
};

render(resolvedContainer);
