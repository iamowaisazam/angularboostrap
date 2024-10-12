import { Routes } from '@angular/router';

export const routes: Routes = [
      {
        path: 'banner',
        loadComponent: () => import('./banner/banner.component').then((m) => m.AboutBannerComponent)
      },
      {
        path: 'mission',
        loadComponent: () => import('./about-missions/about-mission.component').then((m) => m.AboutMissionComponent)
      },
      {
        path: 'map',
        loadComponent: () => import('./about-map/about-map.component').then((m) => m.AboutMapComponent)
      },
      {
        path: 'country',
        loadComponent: () => import('./about-country/about-country.component').then((m) => m.AboutCountryComponent)
      },
      {
        path: 'table',
        loadComponent: () => import('./about-table/about-table.component').then((m) => m.AboutTableComponent)
      },
      {
        path: 'team',
        loadComponent: () => import('./about-team/about-team.component').then((m) => m.AboutTeamComponent)
      },
      {
        path: 'directors',
        loadComponent: () => import('./about-directors/about-directors.component').then((m) => m.AboutDirectorsComponent)
      },
    
      {
        path: 'council',
        loadComponent: () => import('./about-council/about-council.component').then((m) => m.AboutCouncilComponent)
      },
      {
        path: 'member',
        loadComponent: () => import('./about-member/about-member.component').then((m) => m.AboutMemberComponent)
      },
    
];