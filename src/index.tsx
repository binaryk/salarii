import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import Context, {toImmutable} from './context';

import Layout from './components/layout';
import StartPage from './pages/start';

import SamplesConfigurationRoutes from './usage-samples/routes';

import defaultSidebar from './context/sidebar-mock-data';

(function bootstrapMockData() {
    Context.cursor.set('sidebar', toImmutable(defaultSidebar.sidebar));
})();

const mountNode = document.querySelector('#app');
/**
 * We mount the Router component and based
 * on the path it automatically renders the components.
 */
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={StartPage}/>
            {SamplesConfigurationRoutes}
        </Route>
    </Router>, mountNode);