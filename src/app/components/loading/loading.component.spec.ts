import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './LoadingComponent';
import { Store, StoreModule } from '@ngrx/store';
import { loadingReducer } from 'src/store/loading/loading.reducers';
import { AppState } from '@capacitor/app';
import { hide, show } from 'src/store/loading/loading.actions';

describe('LoadingComponent', () => {
  let component: LoadingComponent;
  let fixture: ComponentFixture<LoadingComponent>;
  let store: Store<AppState>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [LoadingComponent],
      imports: [
        IonicModule.forRoot(),
        StoreModule.forRoot([]),
        StoreModule.forFeature("loading", loadingReducer)
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingComponent);
    store = TestBed.get(Store);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should hide loading component when it is not loading', () => {
    const compiler = fixture.nativeElement;

    store.dispatch(hide());
    fixture.detectChanges();

    expect(compiler.querySelected(".backdrop")).toBeNull();
  });
  it('should show loading component when it is loading', () => {
    const compiler = fixture.nativeElement;

    store.dispatch(show());
    fixture.detectChanges();

    expect(compiler.querySelected(".backdrop")).not.toBeNull();
  });
});
