

import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'timeline',
        loadComponent: () => import('./opportunities-timeline/opportunities-timeline.component').then((m) => m.OpportunitiesTimelineComponent)
      },
      {
        path: 'prices',
        loadComponent: () => import('./opportunities-prices/opportunities-prices.component').then((m) => m.OpportunitiesPricesComponent)
      },
];