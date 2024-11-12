import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'home',
        data:{
          title:"Home"
        },
        loadComponent: () => import('../settings/home/home.compontent').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        data:{
          title:"about"
        },
        loadComponent: () => import('../settings/about/about.compontent').then((m) => m.AboutComponent)
      },
];
