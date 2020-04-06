/**
 * Billing deliquency for Group Page
 */
export interface BillingPaymentDTO {
    paymentDateForTermination: Date | string;
    payments: BillingPayment[];
}
/**
 * Billing deliquency for Individual Page
 */
export interface BillingPayment {
    createDate: Date | string;
    receivedDate: Date | string;
    paymentMethod: string;
    checkNo: number;
    amount: number;
    memo: string;
    reason: string;
}
