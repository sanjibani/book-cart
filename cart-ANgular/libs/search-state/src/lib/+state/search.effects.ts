import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AppService } from '../../../../../apps/cart-angular/src/app/app.service';
import * as searchActions from './search.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

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
