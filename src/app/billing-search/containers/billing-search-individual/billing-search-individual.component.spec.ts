import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BillingSearchIndividualComponent } from './billing-search-individual.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BillingSearchServiceMock } from 'src/app/fixtures/billing-search.service.mock';
import { BillingSearchService } from '../../services/billing-search.service';
import { throwError } from 'rxjs';

describe('BillingSearchIndividualComponent', () => {
  let component: BillingSearchIndividualComponent;
  let fixture: ComponentFixture<BillingSearchIndividualComponent>;
  let service: BillingSearchService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingSearchIndividualComponent ],
      imports: [
        NoopAnimationsModule,
        SharedModule
      ],
      providers: [{provide: BillingSearchService, useClass: BillingSearchServiceMock}]
    }).compileComponents();
    service = TestBed.inject(BillingSearchService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingSearchIndividualComponent);
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
  it('Test for error while fetching data', () => {
    spyOn(service, 'getIndividualBillings').and.returnValue(throwError('404 Not Found'));
    component.ngOnInit();
    expect(service.getIndividualBillings).toHaveBeenCalled();
  });
});
