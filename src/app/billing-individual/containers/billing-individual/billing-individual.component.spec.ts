import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingIndividualComponent } from './billing-individual.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillingInfoComponent } from '../billing-info/billing-info.component';
import { PremiumBreakdownComponent } from '../premium-breakdown/premium-breakdown.component';
import { of, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { IndividualService } from '../../services/individual.service';
import { IndividualServiceMock } from 'src/app/fixtures/individual.service.mock';

describe('BillingIndividualComponent', () => {
  let component: BillingIndividualComponent;
  let fixture: ComponentFixture<BillingIndividualComponent>;
  let service: IndividualService;
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
    service = TestBed.inject(IndividualService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingIndividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test for error while fetching data', () => {
    spyOn(service, 'getIndividualBillingsData').and.returnValue(throwError('404 Not Found'));
    component.ngOnInit();
    expect(service.getIndividualBillingsData).toHaveBeenCalled();
  });
});
