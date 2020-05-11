import { Landing, About, TopModels, MoreResources } from 'screens';

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
    component: About,
    path: '/about',
  },
  {
    component: TopModels,
    path: '/top-models',
  },
  {
    component: MoreResources,
    path: '/more-resources',
  },
];
