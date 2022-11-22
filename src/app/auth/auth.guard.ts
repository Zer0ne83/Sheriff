import { DeputyService } from '../services/deputy.service'; import { Injectable } from '@angular/core'; import { CanLoad } from '@angular/router'; import { Observable } from 'rxjs'; import { NavController } from '@ionic/angular'; import { map, take } from 'rxjs/operators'; @Injectable({ providedIn: 'root' })
////////////////////////////////////////////////////////////////////////////////////////////
export class AuthGuard implements CanLoad { constructor(private navController:NavController, private deputy:DeputyService) {}
////////////////////////////////////////////////////////////////////////////////////////////
  canLoad():Observable<boolean> {
    return this.deputy.isAuthenticated.pipe(take(1),map(isAuthenticated => { if (isAuthenticated) { return true } else { this.navController.navigateRoot('/auth');return false }}))
  }
////////////////////////////////////////////////////////////////////////////////////////////
}