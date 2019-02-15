import * as ReactDOM from 'react-dom';
import { resolvedContainer } from './modules/application/containers/application/application.container';
import * as React from 'react';

const root = document.getElementById('root');

const render = (Component: any) => {
	let container = <Component />;

	ReactDOM.render(container, root);
};

render(resolvedContainer);
