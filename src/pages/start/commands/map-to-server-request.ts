import {ICustomerAtServer, ICustomer} from '../model';

export default function mapToServerRequest(customerData:ICustomer):ICustomerAtServer {
    const {
        customerId:CustomerID,
        contactName:ContactName,
        contactTitle:ContactTitle,
        company:CompanyName,
        country:Country
    } = customerData;

    return {
        CustomerID,
        ContactName,
        ContactTitle,
        CompanyName,
        Country
    };
}