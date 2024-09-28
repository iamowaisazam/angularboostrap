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
