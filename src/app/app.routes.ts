import { Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {
      path: 'login',
      data:{
        title:"Admin / Login"
      },
      loadComponent: () => import('./admin/login/login.component').then((m) => m.LoginComponent)
    },
    {
      path: 'register',
      data:{
        title:"Admin / Register"
      },
      loadComponent: () => import('./admin/register/register.component').then((m) => m.RegisterComponent)
    },
    {
        path: 'admin',
        component: AdminComponent,
        // canActivate:[authGuard],
        data: {
          title: 'Admin'
        },
        loadChildren: () => import('./admin/admin.route').then((m) => m.routes)
    },

];
