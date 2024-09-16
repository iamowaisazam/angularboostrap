import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"Post List"
        },
        loadComponent: () => import('./post-list/post-list.component').then((m) => m.PostListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create Post"
        },
        loadComponent: () => import('./post-create/post-create.component').then((m) => m.PostCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit Post"
        },
        loadComponent: () => import('./post-edit/post-edit.component').then((m) => m.PostEditComponent)
      },
];
