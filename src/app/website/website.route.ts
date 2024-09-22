import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: '',
        data:{
          title:"Home"
        },
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        data:{
          title:"About"
        },
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent)
      },
      // {
      //   path: 'profile',
      //   data:{
      //     title:"Profile"
      //   },
      //   loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent)
      // },
  
      // {
      //   path: 'users',
      //   data:{
      //     title:"Admin / Dashboard"
      //   },
      //   loadComponent: () => import('./users/user.component').then((m) => m.UserComponent)
      // },
];
