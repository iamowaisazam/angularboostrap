import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"course List"
        },
        loadComponent: () => import('./course-list/course-list.component').then((m) => m.CourseListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create course"
        },
        loadComponent: () => import('./course-create/course-create.component').then((m) => m.CourseCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit course"
        },
        loadComponent: () => import('./course-edit/course-edit.component').then((m) => m.CourseEditComponent)
      },
];
