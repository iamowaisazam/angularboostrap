import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'slider',
        data:{
          title:"slider"
        },
        loadComponent: () => import('./slider/slider.component').then((m) => m.SettingHomeSliderComponent)
      },
      {
        path: 'about',
        data:{
          title:"About"
        },
        loadComponent: () => import('./about/about.component').then((m) => m.HomeAboutComponent)
      },
      {
        path: 'posts',
        data:{
          title:"Home Posts"
        },
        loadComponent: () => import('./home-posts/home-posts.component').then((m) => m.HomePostsComponent)
      },
];
