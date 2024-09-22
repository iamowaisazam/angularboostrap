import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'banner',
        data:{
          title:"Banner"
        },
        loadComponent: () => import('./banner/banner.component').then((m) => m.AboutBannerComponent)
      },
    
];