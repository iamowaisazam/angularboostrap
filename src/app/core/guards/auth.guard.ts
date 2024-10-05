import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../../admin/admin.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(
    private adminService: AdminService, 
    private router: Router
  ) {

  }

  canActivate(): boolean {

    if (this.adminService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false; 
    }
    
  }


}