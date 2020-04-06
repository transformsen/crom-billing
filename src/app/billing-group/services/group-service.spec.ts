import { TestBed } from '@angular/core/testing';
import { GroupService } from './group-service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';
import { SUBGROUP_RESPONSE } from '../../fixtures/group-service.mock';

const { API_URL_V1 } = environment;

describe('GroupService', () => {
  let httpTestingController: HttpTestingController;
  let service: GroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GroupService],
      imports: [HttpClientTestingModule]
    });

    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(GroupService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('getIndividualBillings returned Observable should match the right data', () => {

    service.getSubGroupInfo('S000', 'G000', 'P000')
      .subscribe(data => {
        expect(data.billingFrequency).toBe('Monthly');
      });

    const req = httpTestingController
        .expectOne(`${API_URL_V1}/billing/group/S000/G000/P000`);

    expect(req.request.method).toEqual('GET');

    req.flush(SUBGROUP_RESPONSE);
  });

});
