import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
      },
      {
        path: 'filemanager',
        loadComponent: () => import('./filemanager/filemanager.component').then((m) => m.FilemanagerComponent)
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
        data:{title:"Customer"},
        loadChildren : () => import('./customers/customer.route').then((m) => m.routes)
      },
      {
        path: 'sliders',
        data:{
          title:"Slider"
        },
        loadChildren : () => import('./sliders/slider.route').then((m) => m.routes)
      },

      {
        path: 'posts',
        data:{
          title:"Post"
        },
        loadChildren : () => import('./posts/post.route').then((m) => m.routes)
      },
      {
        path: 'home',
        loadChildren : () => import('./home/home.route').then((m) => m.routes)
      },
      {
        path: 'about',
        loadChildren : () => import('./about/about.route').then((m) => m.routes)
      },
      {
        path: 'coperation',
        loadChildren : () => import('./coperation/coperation.route').then((m) => m.routes)
      },
      {
        path: 'publication',
        loadChildren : () => import('./publication/publication.route').then((m) => m.routes)
      },


];
