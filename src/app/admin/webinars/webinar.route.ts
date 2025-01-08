import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"Webinar List"
        },
        loadComponent: () => import('./webinar-list/webinar-list.component').then((m) => m.WebinarListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create Webinar"
        },
        loadComponent: () => import('./webinar-create/webinar-create.component').then((m) => m.WebinarCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit Webinar"
        },
        loadComponent: () => import('./webinar-edit/webinar-edit.component').then((m) => m.WebinarEditComponent)
      },
];
