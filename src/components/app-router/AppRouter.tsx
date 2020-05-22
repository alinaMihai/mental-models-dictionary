import React, { Suspense } from 'react';
import { Router, Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import {
  routes,
  GlobalStyle,
  defaultTheme,
  media,
  ErrorBoundary,
  typeScale,
} from 'helpers';
import { createBrowserHistory } from 'history';
import Spinner from 'components/spinner/Spinner';

const history = createBrowserHistory();

export class AppRouter extends React.Component<any, any> {
  public render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Router history={history}>
          {this.props.children}
          <Switch>
            {routes.map((route, key) => (
              <Route
                key={key}
                path={route.path}
                render={() => (
                  <ErrorBoundary>
                    <ThemeProvider
                      theme={{ ...defaultTheme, ...media, ...typeScale }}
                    >
                      <GlobalStyle />

                      <route.component />
                    </ThemeProvider>
                  </ErrorBoundary>
                )}
              />
            ))}
          </Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect exact from="/" to="/landing" />}
          />
        </Router>
      </Suspense>
    );
  }
}

export default withRouter(AppRouter);
