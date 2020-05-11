import React from 'react';
import { Router, Switch, Route, withRouter } from 'react-router-dom';
import { routes } from 'helpers';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

export class AppRouter extends React.Component<any, any> {
  public render() {
    return (
      <Router history={history}>
        <Switch>
          {routes.map((route, key) => (
            <Route key={key} path={route.path} component={route.component} />
          ))}
          {this.props.children}
        </Switch>
      </Router>
    );
  }
}

export default withRouter(AppRouter);
