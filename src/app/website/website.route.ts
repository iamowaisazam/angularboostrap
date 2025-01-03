import { Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { NoteComponent } from './note/note.component';
import { PublicationsComponent } from './publications/publications.component';
import { CooperationComponent } from './cooperation/cooperation.component';
import { CourseComponent } from './course/course.component';
import { SchoolComponent } from './school/school.component';
import { RespositoryComponent } from './respository/respository.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { EventosComponent } from './eventos/eventos.component';
import { RepositorioPublicacionComponent } from './repositorio-detail/repositorio-detail.component';
import { DestacadosComponent } from './destacados/destacados.component';
import { DestacadosDetailComponent } from './destacados-detail/destacados-detail.component';


export const routes: Routes = [
      {
        path: '',
        data:{title:"Home"},
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        data:{title:"About"},
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: 'destacados',
        data:{title:"Destacados"},
        loadComponent: () => import('./destacados/destacados.component').then((m) => m.DestacadosComponent)

      },
      {
        path: 'destacados/:id',
        data:{title:"Destacados"},
        component:DestacadosDetailComponent
      },
      {
        path: 'notes',
        data:{title:"Note"},
        loadComponent: () => import('./note/note.component').then((m) => m.NoteComponent)
      },
      {
        path: 'publications',
        data:{title:"Publications"},
        loadComponent: () => import('./publications/publications.component').then((m) => m.PublicationsComponent)

      },
      {
        path: 'cooperation',
        data:{title:"Cooperation"},
        loadComponent: () => import('./cooperation/cooperation.component').then((m) => m.CooperationComponent)
      },
      {
        path: 'course',
        data:{title:"Course"},
        loadComponent: () => import('./course/course.component').then((m) => m.CourseComponent)
      },
      {
        path: 'school',
        data:{title:"School"},
        loadComponent: () => import('./school/school.component').then((m) => m.SchoolComponent)
      },
      {
        path: 'respository',
        data:{title:"Respository"},
        component: RespositoryComponent
      },
      {
        path: 'respository/:id',
        data:{title:"Repositorio Publicacion"},
        component : RepositorioPublicacionComponent
      },
      {
        path: 'eventos',
        data:{title:"Eventos"},
        loadComponent: () => import('./eventos/eventos.component').then((m) => m.EventosComponent)
      },
      {
        path: 'oportunidades',
        data:{title:"Oportunidades"},
        loadComponent: () => import('./oportunidades/oportunidades.component').then((m) => m.OportunidadesComponent)
      }
];
