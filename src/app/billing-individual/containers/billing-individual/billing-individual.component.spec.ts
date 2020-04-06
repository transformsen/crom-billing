import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingIndividualComponent } from './billing-individual.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillingInfoComponent } from '../billing-info/billing-info.component';
import { PremiumBreakdownComponent } from '../premium-breakdown/premium-breakdown.component';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IndividualService } from '../../services/individual.service';
import { IndividualServiceMock } from 'src/app/fixtures/individual.service.mock';

describe('BillingIndividualComponent', () => {
  let component: BillingIndividualComponent;
  let fixture: ComponentFixture<BillingIndividualComponent>;
  const activatedRouteMock = {
    params: of({
      policyId: 'policyId'
    }),
    queryParams: of({
      policyHolderGuid: 'policyHolderGuid'
    })
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingIndividualComponent, BillingInfoComponent, PremiumBreakdownComponent ],
      imports: [SharedModule, NoopAnimationsModule],
      providers: [{provide: ActivatedRoute, useValue: activatedRouteMock},
        {provide: IndividualService, useClass: IndividualServiceMock}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
