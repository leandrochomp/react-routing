var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
//the especif page
var Route = ReactRouter.Route;

//kill the hash key on barnavigation

/*
var CreateHistory = require('history/lib/createHashHistory');
var History = new CreateHistory({
	queryKey: false
});
*/

import { browserHistory } from 'react-router'


var Base = require('./components/base.jsx');
var Page1 = require('./components/Page1.jsx');
var Page2 = require('./components/Page2.jsx');

var Routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Base} >
			<Route path="/page1" component={Page1} />
			<Route path="/page2" component={Page2} />
		</Route>
	</Router>
);

module.exports = Routes;