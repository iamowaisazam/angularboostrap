import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
      },
      {
        path: 'posts',
        data:{
          title:"Post"
        },
        loadChildren : () => import('./posts/post.route').then((m) => m.routes)
      },
      {
        path: 'pdf',
        data:{
          title:"pdf"
        },
        loadChildren : () => import('./pdf/pdf.route').then((m) => m.routes)
      },
      {
        path: 'filemanager',
        loadComponent: () => import('./filemanager/filemanager.component').then((m) => m.FilemanagerComponent)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/setting.route').then((m) => m.routes)
      },    
];
