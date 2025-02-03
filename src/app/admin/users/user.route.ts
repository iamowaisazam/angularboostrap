import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"User List"
        },
        loadComponent: () => import('./user-list/user-list.component').then((m) => m.UserListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create User"
        },
        loadComponent: () => import('./user-create/user-create.component').then((m) => m.UserCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit User"
        },
        loadComponent: () => import('./user-edit/user-edit.component').then((m) => m.UserEditComponent)
      },
];
