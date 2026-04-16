import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/shell/shell/shell').then((c) => c.Shell),
    children: [
      {
        path: '',
        loadComponent: () => import('./simulation/ui/pages/ui-page/ui-page').then((c) => c.UiPage),
      },
      {
        path: 'ui',
        loadComponent: () => import('./simulation/ui/pages/ui-page/ui-page').then((c) => c.UiPage),
      },
      {
        path: 'system',
        loadComponent: () =>
          import('./simulation/ui/pages/system-page/system-page').then((c) => c.SystemPage),
      },
      {
        path: 'scenarios',
        loadChildren: () =>
          import('./scenarios/scenarios.page/scenarios.page').then((c) => c.ScenariosPage),
      },
    ],
  },
];
