import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"Pdf List"
        },
        loadComponent: () => import('./pdf-list/pdf-list.component').then((m) => m.PdfListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create Pdf"
        },
        loadComponent: () => import('./pdf-create/pdf-create.component').then((m) => m.PdfCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit Pdf"
        },
        loadComponent: () => import('./pdf-edit/pdf-edit.component').then((m) => m.PdfEditComponent)
      },
];
