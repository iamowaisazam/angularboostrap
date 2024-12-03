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
        component :  HomeComponent,
      },
      {
        path: 'about',
        data:{title:"About"},
        component:AboutComponent,
      },
      {
        path: 'destacados',
        data:{title:"Destacados"},
        component:DestacadosComponent
      },
      {
        path: 'destacados/:id',
        data:{title:"Destacados"},
        component:DestacadosDetailComponent
      },
      {
        path: 'notes',
        data:{title:"Note"},
        component:NoteComponent
      },
      {
        path: 'publications',
        data:{title:"Publications"},
        component: PublicationsComponent
      },
      {
        path: 'cooperation',
        data:{title:"Cooperation"},
        component: CooperationComponent
      },
      {
        path: 'course',
        data:{title:"Course"},
        component:CourseComponent
      },
      {
        path: 'school',
        data:{title:"School"},
        component:SchoolComponent
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
        component: EventosComponent
      },
      {
        path: 'oportunidades',
        data:{title:"Oportunidades"},
        component : OportunidadesComponent
      }
];
