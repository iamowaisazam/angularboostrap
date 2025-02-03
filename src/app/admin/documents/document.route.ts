import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"Document List"
        },
        loadComponent: () => import('./document-list/document-list.component').then((m) => 
          m.DocumentListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create Document"
        },
        loadComponent: () => import('./document-create/document-create.component').then((m) => m.DocumentCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit Document"
        },
        loadComponent: () => import('./document-edit/document-edit.component').then((m) => m.DocumentEditComponent)
      },
];
