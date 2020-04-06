import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { BillingSearchGroupComponent } from './billing-search-group.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillingSearchServiceMock } from 'src/app/fixtures/billing-search.service.mock';
import { BillingSearchService } from '../../services/billing-search.service';

describe('BillingSearchGroupComponent', () => {
  let component: BillingSearchGroupComponent;
  let fixture: ComponentFixture<BillingSearchGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSearchGroupComponent ],
      imports: [
        NoopAnimationsModule,
        SharedModule
      ],
      providers: [{provide: BillingSearchService, useClass: BillingSearchServiceMock}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSearchGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
  it('search and reset', () => {
    expect(component.search()).toBeUndefined();
    expect(component.reset()).toBeUndefined();
  });
});
