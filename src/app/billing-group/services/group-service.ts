import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BillingGroupInfo } from 'src/app/models/billing-group-info';

const { API_URL_V1 } = environment;

@Injectable()
export class GroupService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Fetch subgroup info
   * @param id Id of subgroup
   */
  getSubGroupInfo(subGroupId, groupId, planNumber) {
    return this.httpClient.get<BillingGroupInfo>(`${API_URL_V1}/billing/group/${subGroupId}/${groupId}/${planNumber}`);
  }
}
