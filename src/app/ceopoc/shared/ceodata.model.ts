
// mother class
export interface CeoData {
    policyNumber: string;
    creationDate: string;
    expireDate: string;
    policyAmount: number;
    clientId: string;
    employeeId: string;
    months?: Month[];
}

// child class
export interface Month {
    monthId: number;
    monthName: string;
}