
/**
 * Premium Breakdown DTO model
 */
export interface PremiaumBreakdownDTO {
    eligibilityBeginDate: string;
    eligibilityEndDate: string;
    productName: string;
    marketSegment: number;
    totalPremium: number;
    policyMemberDetails: [
        {
            firstName: string;
            middleName: string;
            lastName: string;
            memberStatus: string;
            rateArea: string;
            tobaccoStatus: string;
            memberPremiumTotal: number;
            medicalRate: number;
            dentalRate: number;
            visionRate: number;
            contraceptiveRate: number;
            serviceFee: number
        }
    ];
}
