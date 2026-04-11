import { Routes } from '@angular/router';

export const SIMULATION_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/ui-page/ui-page').then((m) => m.UiPage),
  },
];
