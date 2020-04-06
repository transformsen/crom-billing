import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingInfoComponent } from './billing-info.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { INDIVIDUAL_RESPONSE } from '../../../fixtures/individual.service.mock';

describe('BillingInfoComponent', () => {
  let component: BillingInfoComponent;
  let fixture: ComponentFixture<BillingInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingInfoComponent ],
      imports: [SharedModule, NoopAnimationsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingInfoComponent);
    component = fixture.componentInstance;
    component.individualInfo = INDIVIDUAL_RESPONSE as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
