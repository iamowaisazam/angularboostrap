import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"Event List"
        },
        loadComponent: () => import('./event-list/event-list.component').then((m) => m.EventListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create Event"
        },
        loadComponent: () => import('./event-create/event-create.component').then((m) => m.EventCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit Event"
        },
        loadComponent: () => import('./event-edit/event-edit.component').then((m) => m.EventEditComponent)
      },
];
