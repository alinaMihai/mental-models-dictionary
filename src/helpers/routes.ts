import React from 'react';
import { Landing } from 'screens/landing/Landing';
interface Route {
  component: any;
  path: string;
}

export const routes: Route[] = [
  {
    component: Landing,
    path: '/landing',
  },
  {
    component: React.lazy(() => import('screens/about/About')),
    path: '/about',
  },
  {
    component: React.lazy(() => import('screens/top-models/TopModels')),
    path: '/top-models',
  },
  {
    component: React.lazy(() => import('screens/more-resources/MoreResources')),
    path: '/more-resources',
  },
  {
    component: React.lazy(() =>
      import('screens/mental-models-by-category/MentalModelsByCategory'),
    ),
    path: '/mental-models/:id',
  },
];
