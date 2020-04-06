import { BillingGroupSearchPayload, BillingIndividualSearchPayload } from '../billing-search/models/blling-search.payload';
import { of } from 'rxjs';

export const BILLING_INDIVIDUAL_RESPONSE = [{
    policyId: 'W0012345',
    policyHolder: 'John Doe',
    policyHolderGuid: '95758ef3-1b3e-ea11-a812-000d3a3abe58',
    dateOfBirth: '01/01/1980',
    effectiveDate: '01/01/2020',
    terminationDate: '12/31/2020',
    policyType: '123',
    groupName: 'Group Name',
    policyGuid: '58b01cc5-8438-ea11-a813-000d3a3ab849'
}, {
    policyId: 'W0067890',
    policyHolder: 'John Doe',
    policyHolderGuid: '95758ef3-1b3e-ea11-a812-000d3a3abe58',
    dateOfBirth: '01/01/1985',
    effectiveDate: '01/01/2020',
    terminationDate: '12/31/2020',
    policyType: '456',
    groupName: 'Group Name',
    policyGuid: '58b01cc5-8438-ea11-a813-000d3a3ab849'
}];


export const BILLING_GROUP_RESPONSE = {
    results: [{
        groupName: 'Group Name',
        groupId: '12345678',
        subGroupName: 'Sub Group Name',
        subGroupId: '1000',
        effectiveDate: '01/01/2020',
        terminationDate: '12/31/2020',
        planNumber: '456',
        accountId: '58b01cc5-8438-ea11-a813-000d3a3ab849'
    }, {
        groupName: 'Group Name 2',
        groupId: '12345678',
        subGroupName: 'Sub Group Name',
        subGroupId: '1001',
        effectiveDate: '01/01/2019',
        terminationDate: '12/31/2019',
        planNumber: '123',
        accountId: 'ccbb785a-99b7-e911-a820-000d3a3b5c20'
    }]
};

export class BillingSearchServiceMock {
    getGroupBillings(payload: BillingGroupSearchPayload) {
        return of(BILLING_GROUP_RESPONSE);
    }

    getIndividualBillings(payload: BillingIndividualSearchPayload) {
        return of(BILLING_INDIVIDUAL_RESPONSE);
    }
}
