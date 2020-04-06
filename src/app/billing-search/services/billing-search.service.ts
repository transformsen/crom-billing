import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BillingGroupSearchPayload, BillingIndividualSearchPayload } from '../models/blling-search.payload';
import { environment } from 'src/environments/environment';

import { BillingGroup, BillingIndividual, SearchResponse } from '../models/billing';
import { buildQueryFromPayload } from 'src/app/utils';

const { API_URL_V1 } = environment;

@Injectable()
export class BillingSearchService {

    constructor(private httpClient: HttpClient) {}

    /**
     * Get group billings (search)
     * @param payload Search payload
     */
    getGroupBillings(payload: BillingGroupSearchPayload) {
        const query = buildQueryFromPayload(payload);
        return this.httpClient.get<SearchResponse<BillingGroup>>(`${API_URL_V1}/billing/group/search${query}`);
    }

    /**
     * Get individual billings (search)
     * @param payload Search payload
     */
    getIndividualBillings(payload: BillingIndividualSearchPayload) {
        const query = buildQueryFromPayload(payload);
        return this.httpClient.get<BillingIndividual[]>(`${API_URL_V1}/billing/individual/search${query}`);
    }
}
