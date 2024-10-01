import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: '',
        data:{
          title:"Home"
        },
        loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent)
      },
      {
        path: 'about',
        data:{
          title:"About"
        },
        loadComponent: () => import('./about/about.component').then((m) => m.AboutComponent)
      },
      {
        path: 'notes',
        data:{
          title:"Note"
        },
        loadComponent: () => import('./note/note.component').then((m) => m.NoteComponent)
      },
      {
        path: 'publications',
        data:{
          title:"Publications"
        },
        loadComponent: () => import('./publications/publications.component').then((m) => m.PublicationsComponent)
      },
      {
        path: 'cooperation',
        data:{
          title:"Cooperation"
        },
        loadComponent: () => import('./cooperation/cooperation.component').then((m) => m.CooperationComponent)
      },
      {
        path: 'course',
        data:{
          title:"Course"
        },
        loadComponent: () => import('./course/course.component').then((m) => m.CourseComponent)
      },
      {
        path: 'school',
        data:{
          title:"School"
        },
        loadComponent: () => import('./school/school.component').then((m) => m.SchoolComponent)
      },
      {
        path: 'respository',
        data:{
          title:"Respository"
        },
        loadComponent: () => import('./respository/respository.component').then((m) => m.RespositoryComponent)
      },
      {
        path: 'repositorio-publicacion',
        data:{
          title:"Repositorio Publicacion"
        },
        loadComponent: () => import('./repositorio-publicacion/repositorio-publicacion.component').then((m) => m.RepositorioPublicacionComponent)
      },
      {
        path: 'eventos',
        data:{
          title:"Eventos"
        },
        loadComponent: () => import('./eventos/eventos.component').then((m) => m.EventosComponent)
      },
      {
        path: 'oportunidades',
        data:{
          title:"Oportunidades"
        },
        loadComponent: () => import('./oportunidades/oportunidades.component').then((m) => m.OportunidadesComponent)
      },

      

      

      // {
      //   path: 'profile',
      //   data:{
      //     title:"Profile"
      //   },
      //   loadComponent: () => import('./profile/profile.component').then((m) => m.ProfileComponent)
      // },
  
      // {
      //   path: 'users',
      //   data:{
      //     title:"Admin / Dashboard"
      //   },
      //   loadComponent: () => import('./users/user.component').then((m) => m.UserComponent)
      // },
];
