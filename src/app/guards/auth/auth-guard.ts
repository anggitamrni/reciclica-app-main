import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CanLoad, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState as CapacitorAppState } from '@capacitor/app';
import { switchMap, take } from 'rxjs/operators'; // Remove this line

interface AppState {
  login: any; // Add this line
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(private store: Store<AppState>, private router: Router) { }

  canLoad(): Observable<boolean> {
    // Define a selector function to access login state
    const selectLoginState = (state: AppState) => state.login;
    return this.store.select(selectLoginState).pipe(
      take(1),
      switchMap((loginState: any) => {
        if (loginState.isLoggedIn){
          return of(true);
        }
        this.router.navigateByUrl('login');
        return of(false);
      })
    )
  }
}