

import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'working',
        loadComponent: () => import('./working/working.component').then((m) => m.WorkingComponent)
      },
      {
        path: 'agrement',
        loadComponent: () => import('./agrement/agrement.component').then((m) => m.AgrementComponent)
      },
];