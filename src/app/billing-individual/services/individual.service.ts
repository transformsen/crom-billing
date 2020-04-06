import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BillingIndividualInfo } from '../../models/billing-individual-info';

const { API_URL_V1 } = environment;

@Injectable()
export class IndividualService {

    constructor(private httpClient: HttpClient) {}

    /**
     * Get individual billings info
     * @param id Policy Id
     */
    getIndividualBillingsData(ioi: string) {
        return this.httpClient.get<BillingIndividualInfo>(`${API_URL_V1}/billing/individual/${ioi}`);
    }

}
