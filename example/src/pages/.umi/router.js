import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@tmp/history';
import { routerRedux, dynamic as _dvaDynamic } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: __IS_BROWSER
      ? _dvaDynamic({
          component: () =>
            import(/* webpackChunkName: "layouts__index" */ '../../layouts/index'),
        })
      : require('../../layouts/index').default,
    routes: [
      {
        path: '/',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__index" */ '../index'),
            })
          : require('../index').default,
        exact: true,
        _title: 'xxx',
        _title_default: 'xxx',
      },
      {
        path: '/modal',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__modal" */ '../modal'),
            })
          : require('../modal').default,
        exact: true,
        _title: 'xxx',
        _title_default: 'xxx',
      },
      {
        path: '/image',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__image" */ '../image'),
            })
          : require('../image').default,
        exact: true,
        _title: 'xxx',
        _title_default: 'xxx',
      },
      {
        path: '/table',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__table" */ '../table'),
            })
          : require('../table').default,
        exact: true,
        _title: 'xxx',
        _title_default: 'xxx',
      },
      {
        path: '/form',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__form" */ '../form'),
            })
          : require('../form').default,
        exact: true,
        _title: 'xxx',
        _title_default: 'xxx',
      },
      {
        path: '/crud',
        component: __IS_BROWSER
          ? _dvaDynamic({
              component: () =>
                import(/* webpackChunkName: "p__crud" */ '../crud'),
            })
          : require('../crud').default,
        exact: true,
        _title: 'xxx',
        _title_default: 'xxx',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/ldd/.config/yarn/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: true },
          ),
        _title: 'xxx',
        _title_default: 'xxx',
      },
    ],
    _title: 'xxx',
    _title_default: 'xxx',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/ldd/.config/yarn/global/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: true },
      ),
    _title: 'xxx',
    _title_default: 'xxx',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
