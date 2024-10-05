import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AdminService } from '../../admin/admin.service';

@Injectable({
  providedIn: 'root',
})
export class NotAuthGuard implements CanActivate {

  constructor(
    private adminService: AdminService, 
    private router: Router
  ) {

  }

  canActivate(): boolean {

    if (this.adminService.isAuthenticated()) {
        this.router.navigate(['/admin/dashboard']);
        return false;
    } else {
    
      return true; 
    }
    
  }


}