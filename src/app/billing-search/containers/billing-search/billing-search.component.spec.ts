import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingSearchComponent } from './billing-search.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('BillingSearchComponent', () => {
  let component: BillingSearchComponent;
  let fixture: ComponentFixture<BillingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, NoopAnimationsModule],
      declarations: [ BillingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
