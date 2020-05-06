import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Store, StoreModule, ReducerManager, ReducerManagerDispatcher } from '@ngrx/store';
import * as mock from '@cart-angular/mock-data';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '@cart-angular/shared';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from '../../../../app.service';
import * as fromProduct from '@cart-angular/search-state';
import { of } from 'rxjs';
import { reducer } from '@cart-angular/search-state';
import { CollectionMainComponent } from './collection-main.component';
import { MatCardModule } from '@angular/material/card';


const storeMock = {  
  select() {
    return of({
    });
}
};

describe('Collection Component:', () => {
  let component: CollectionMainComponent;
  let fixture: ComponentFixture<CollectionMainComponent>;
  let store: Store<fromProduct.State>
  const mockData = mock.productsData.items;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatCardModule,
        StoreModule.forRoot({ feature: reducer })],
        // StoreModule.forRoot({ feature: reducer })],
      declarations: [
        CollectionMainComponent
      ],
      providers: [AppService, ReducerManager, ReducerManagerDispatcher]
    }).compileComponents();
  }));

  beforeEach(() => {
    store = TestBed.inject(Store);
    fixture = TestBed.createComponent(CollectionMainComponent);
    component = fixture.debugElement.componentInstance;
    // const store = fixture.debugElement.injector.get(Store);
    // let store: Store<fromProduct.State>
  });


  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

});
