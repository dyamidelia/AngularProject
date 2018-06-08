import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {
   response =[{
    "trans_id": "string",
    "user_id": "string",
    "tsc_org_id": "string",
    "user_trans_id": "org_1",
    "trans_source": "string",
    "trans_destination": "string",
    "service_name": "string",
    "trans_ts": "2018-06-07T04:54:42.817Z",
    "trans_status": "string",
    "trans_state": "string",
    "parent_id": "string",
    "trans_desp": "string",
    "extra_props": "string",
    "bc_trans_hash": "string",
    "bc_trans_id": "string",
    "create_ts": "2018-06-07T04:54:42.817Z",
    "payload_id": "string"
  }];

  columnDetailsResponse = [
      {
      "col_name": "user_trans_id",
      "display_name": "Transaction ID"
      },
      {
        "col_name": "trans_source",
        "display_name": "Source"
      },
      {
        "col_name": "trans_destination",
        "display_name": "Destination"
      },
      {
        "col_name": "service_name",
        "display_name": "Service Name"
      },
      {
        "col_name": "trans_status",
        "display_name": "Status"
      },
      {
        "col_name": "trans_state",
        "display_name": "State"
      },
      {
        "col_name": "trans_ts",
        "display_name": "Timestamp"
      },
      {
        "col_name": "trans_desp",
        "display_name": "Description"
      },
      {
        "col_name": "extra_props",
        "display_name": "Extra Information"
      }
    ];
   
  constructor(
    private http: HttpClient) {

     }
  getTransactionDetails(transactionId,userId){
    return this.response;
    // this.http.get("http://10.102.17.21:8080/rest/transactions/transactionId/user-trans-id/userId").toPromise()
    // .then(response => response)
    // .catch(this.handleError);
    
  }
  getDisplayNamesForColumns(){
    return this.columnDetailsResponse;
    // this.http.get("http://10.102.17.21:8080/rest/columnConfigs/detialPage").toPromise()
    // .then(response => response)
    // .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
    }
}
