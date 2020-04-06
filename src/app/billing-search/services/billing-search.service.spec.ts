import { TestBed } from '@angular/core/testing';
import { BillingSearchService } from './billing-search.service';
import { HttpClientTestingModule,
         HttpTestingController } from '@angular/common/http/testing';
import { BILLING_INDIVIDUAL_RESPONSE, BILLING_GROUP_RESPONSE } from 'src/app/fixtures/billing-search.service.mock';
import { environment } from 'src/environments/environment';

const { API_URL_V1 } = environment;


describe('BillingSearchService', () => {
  let httpTestingController: HttpTestingController;
  let service: BillingSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillingSearchService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(BillingSearchService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getIndividualBillings returned Observable should match the right data', () => {

    service.getIndividualBillings({ ssn: '000000000', policyId: 'W00000' })
      .subscribe(data => {
        expect(data[0].policyId).toBe('W0012345');
        expect(data.length).toBe(2);
      });

    const req = httpTestingController
        .expectOne(`${API_URL_V1}/billing/individual/search?ssn=000000000&policyId=W00000`);

    expect(req.request.method).toEqual('GET');

    req.flush(BILLING_INDIVIDUAL_RESPONSE);
  });

  it('getGroupBillings returned Observable should match the right data', () => {

    service.getGroupBillings({ groupId: 'GNNN', groupName: 'G000', subgroupId: 'S000' })
      .subscribe(data => {
        expect(data.results.length).toBe(2);
      });

    const req = httpTestingController
        .expectOne(`${API_URL_V1}/billing/group/search?groupId=GNNN&groupName=G000&subgroupId=S000`);

    expect(req.request.method).toEqual('GET');

    req.flush(BILLING_GROUP_RESPONSE);
  });
});
