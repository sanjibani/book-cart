import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppService } from '../../../../../apps/cart-angular/src/app/app.service';
import * as searchActions from '@cart-angular/search-state';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { Action } from '@ngrx/store';

@Injectable()
export class SearchEffects {
  constructor(private actions$: Actions, private appService: AppService) { }

  @Effect()
  loadProducts$ = this.actions$.pipe(
   ofType(searchActions.SearchActionTypes.Load),
   map((action: searchActions.Load) => action.payload),
   mergeMap((searchQuery: string) =>
   this.appService.getProducts(searchQuery).pipe(
       map(response => (new searchActions.LoadSuccess(response.items))),
       catchError(err => of(new searchActions.LoadFailure(err)))
   )
   )
  );
}
