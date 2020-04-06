/**
 * Billing group DTO model
 */
export interface BillingGroupInfo {
    billingAddress: {
        streetAddr1: string;
        streetAddr2: string;
        city: string;
        state: string;
        zip: string
    };
    billingFrequency: string;
    statementType: string;
    suspendBilling: string;
    netAmountDue: number;
    currentSuspense: number;
    eligibilityThroughDate: string;
    potentialLateFeeAmount: number;
    billingContact: {
        firstName: string;
        lastName: string;
        phone: string
    };
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
    delinquencyCorrespondences: [
        {
            date: string;
            description: string;
            document: string
        }
    ];
}
