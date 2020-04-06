import { TestBed } from '@angular/core/testing';
import { IndividualService } from './individual.service';
import { HttpClientTestingModule,
         HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { INDIVIDUAL_RESPONSE } from 'src/app/fixtures/individual.service.mock';

const { API_URL_V1 } = environment;


describe('IndividualService', () => {
  let httpTestingController: HttpTestingController;
  let service: IndividualService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IndividualService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(IndividualService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getIndividualBillings returned Observable should match the right data', () => {

    service.getIndividualBillingsData('TEST')
      .subscribe(data => {
        expect(data.policyHolder).toBe('John James Wilkes');
      });

    const req = httpTestingController
        .expectOne(`${API_URL_V1}/billing/individual/TEST`);

    expect(req.request.method).toEqual('GET');

    req.flush(INDIVIDUAL_RESPONSE);
  });

});
