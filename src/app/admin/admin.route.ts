import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then((m) => m.DashboardComponent)
      },
      {
        path: 'webinars',
        data:{
          title:"Webinar"
        },
        loadChildren : () => import('./webinars/webinar.route').then((m) => m.routes)
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
        path: 'course',
        data:{
          title:"School"
        },
        loadChildren : () => import('./courses/course.route').then((m) => m.routes)
      },
      {
        path: 'event',
        data:{
          title:"Event"
        },
        loadChildren : () => import('./event/event.route').then((m) => m.routes)
      },
      {
        path: 'newsletter',
        loadComponent: () => import('./newsletters/newsletters.component').then((m) => m.NewslettersComponent)
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
