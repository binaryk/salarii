import {ICustomer} from '../model';

export default function mapFromServerResponse(customerData):ICustomer {
    const {
              CustomerID,
              ContactName,
              ContactTitle,
              CompanyName,
              Country
          } = customerData;

    return {
        customerId: CustomerID,
        contactName: ContactName,
        contactTitle: ContactTitle,
        company: CompanyName,
        country: Country
    };
}