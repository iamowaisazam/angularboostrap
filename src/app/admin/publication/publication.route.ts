import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'repository',
        loadComponent: () => import('./publication-respository/publication-respository.component').then((m) => m.PublicationRespositoryComponent)
      },

];
