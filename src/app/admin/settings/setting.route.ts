import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'home',
        data:{
          title:"Home"
        },
        loadComponent: () => import('./home/home.component').then((m) => m.SettingHomeComponent)
      },
];