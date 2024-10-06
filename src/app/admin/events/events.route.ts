

import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'thematic',
        loadComponent: () => import('./events-thematic/events-thematic.component').then((m) => m.EventsThematicComponent)
      },
      {
        path: 'plenary',
        loadComponent: () => import('./events-plenary/events-plenary.component').then((m) => m.EventsPlenaryComponent)
      },
      {
        path: 'most',
        loadComponent: () => import('./events-most/events-most.component').then((m) => m.EventsMostComponent)
      },
      {
        path: 'actividades',
        loadComponent: () => import('./events-actividades/events-actividades.component').then((m) => m.EventsActividadesComponent)
      },
      {
        path: 'fq',
        loadComponent: () => import('./events-fq/events-fq.component').then((m) => m.EventsFqComponent)
      },
     
      
];