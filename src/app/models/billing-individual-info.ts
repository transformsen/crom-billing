import { PremiaumBreakdownDTO } from './premium-breakdown-rate';

/**
 * Billing individual info DTO
 */
export interface BillingIndividualInfo {
    policyHolder: string;
    policyId: string;
    subgroupName: string;
    billingAddress: {
        streetAddr1: string;
        streetAddr2: string;
        city: string;
        state: string;
        zip: string
    };
    billingFrequency: string;
    processedDateForTermination: string;
    statementType: string;
    paymentDeferredDate: string;
    suspendBilling: string;
    netAmountDue: number;
    currentSuspense: string;
    eligibilityThroughDate: string;
    aptcEndDate: string;
    marketSegment: string;
    totalPremiumsPaidByYear: [
        {
            year: string;
            amount: number
        }
    ];
    billingNotes: [
        {
            modifiedDate: string;
            description: string;
            noteFromBilling: string
        }
    ];
    bills: [
        {
            invoiceNumber: string;
            invoiceLink: string;
            invoiceCreateDate: string;
            billingPeriodBeginDate: string;
            billingPeriodEndDate: string;
            currentPaymentStatus: string;
            totalAmountBilled: number
        }
    ];
    payments: [
        {
            createDate: string;
            receivedDate: string;
            paymentMethod: string;
            checkNumber: string;
            amount: number;
            memo: string;
            reason: string
        }
    ];
    delinquencyCorrespondence: [
        {
            date: string;
            description: string;
            document: string
        }
    ];
    aptcHistory: [
        {
            effectiveDate: string;
            terminationDate: string;
            amount: string
        }
    ];
    dbiHistory: [
        {
            lastUpdate: string;
            description: string;
            amount: string
        }
    ];
    premiumBreakdown: PremiaumBreakdownDTO[];
}
