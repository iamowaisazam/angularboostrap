import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'dashboard',
        data:{
          title:"Admin / Dashboard"
        },
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
      },
      // {
      //   path: 'profile',
      //   data:{
      //     title:"Profile"
      //   },
      //   loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent)
      // },
      {
        path: 'customers',
        data:{
          title:"Customer"
        },
        loadChildren : () => import('./customers/customer.route').then((m) => m.routes)
      },
      {
        path: 'sliders',
        data:{
          title:"Slider"
        },
        loadChildren : () => import('./sliders/slider.route').then((m) => m.routes)
      },
      // {
      //   path: 'users',
      //   data:{
      //     title:"Admin / Dashboard"
      //   },
      //   loadComponent: () => import('./users/user.component').then((m) => m.UserComponent)
      // },
];
