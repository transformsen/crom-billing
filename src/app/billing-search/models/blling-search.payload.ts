/**
 * Search group payload model
 */
export interface BillingGroupSearchPayload {
    groupName?: string;
    groupId?: string;
    subgroupId?: string;
}
/**
 * Search individual payload model
 */
export interface BillingIndividualSearchPayload {
    ssn: string;
    policyId: string;
}
