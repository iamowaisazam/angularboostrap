import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { WebsiteComponent } from './website/website.component';
import {routes as WebRoutes} from './website/website.route';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/notAuth.guard';



export const routes: Routes = [
    {
      path: '',
      component:WebsiteComponent,
      data:{
        title:"Home"
      },
      children: WebRoutes,
    },
    {
      path: 'login',
      // canActivate: [NotAuthGuard],
      data:{
        title:"Admin / Login"
      },
      loadComponent: () => import('./admin/login/login.component').then((m) => m.LoginComponent)
    },
    {
      path: 'register',
      // canActivate: [NotAuthGuard],
      data:{
        title:"Admin / Register"
      },
      loadComponent: () => import('./admin/register/register.component').then((m) => m.RegisterComponent)
    },
    {
        path: 'admin',
        component: AdminComponent,
        // canActivate: [AuthGuard],
        data: {title: 'Admin'},
        loadChildren: () => import('./admin/admin.route').then((m) => m.routes)
    },

];
