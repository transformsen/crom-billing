/**
 * Billing group listing DTO model
 */
export interface BillingGroup {
    groupId: number;
    groupName: string;
    billingFrequency: number;
    subGroupName: string;
    subGroupId: number;
    effectiveDate: Date | string;
    terminationDate: Date | string;
    planNumber: string;
    accountId: string;
}

/**
 * Billing individual listing DTO model
 */
export interface BillingIndividual {
    policyId: string;
    policyHolder: string;
    dateOfBirth: string | Date;
    effectiveDate: string | Date;
    terminationDate: string | Date;
    policyType: number;
    groupName: string;
    policyHolderGuid: string;
    policyGuid: string;
    SSN: string;
}

export interface SearchResponse<T> {
    results: Array<T>;
}
