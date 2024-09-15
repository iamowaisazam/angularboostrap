import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'list',
        data:{
          title:"Slider List"
        },
        loadComponent: () => import('./slider-list/slider-list.component').then((m) => m.SliderListComponent)
      },
      {
        path: 'create',
        data:{
          title:"Create Slider"
        },
        loadComponent: () => import('./slider-create/slider-create.component').then((m) => m.SliderCreateComponent)
      },
      {
        path: 'edit/:id',
        data:{
          title:"Edit Slider"
        },
        loadComponent: () => import('./slider-edit/slider-edit.component').then((m) => m.SliderEditComponent)
      },
];
