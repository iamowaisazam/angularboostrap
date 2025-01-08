import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'home',
        data:{
          title:"Home"
        },
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        data:{
          title:"about"
        },
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: 'publication',
        data:{
          title:"publication"
        },
        loadComponent: () => import('./publication/publication.component').then((m) => m.SettingPublicationComponent)
      },
      {
        path: 'cooperation',
        data:{
          title:"cooperation"
        },
        loadComponent: () => import('./cooperation/cooperation.component').then((m) => m.SettingCooperationComponent)
      },
      {
        path: 'noticas',
        data:{
          title:"Noticas"
        },
        loadComponent: () => import('./noticas/noticas.component').then((m) => m.SettingNoticasComponent)
      },
      {
        path: 'repository',
        data:{
          title:"Noticas"
        },
        loadComponent: () => import('./repository/repository.component').then((m) => m.SettingRepositoryComponent)
      },  
      {
        path: 'escuela',
        data:{
          title:"Escuela"
        },
        loadComponent: () => import('./escuela/escuela.component').then((m) => m.SettingEscuelaComponent)
      },  

      
];
