import { Injectable } from '@angular/core';
// import { Http, Response } from '@angular/http';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import {hitURL} from '../app.globals';
@Injectable({
  providedIn: 'root'
})
export class TransactionDetailsService {
  // hitURL = 'http://10.102.17.21:8080/rest';
  response = [
    {
      'trans_id': '1ec9cde4-7195-402c-946c-af8f8df1ae24',
      'user_id': 'd249ea76-2795-4b5b-a5c4-0b0feac429fe',
      'tsc_org_id': 'tibco1',
      'user_trans_id': '9c09eb86-357f-4d57-af4d-459ffebab4e8',
      'trans_source': 'Seller',
      'trans_destination': 'Buyer',
      'service_name': 'Vehicle Management',
      'trans_ts': '2018-06-20 02:15:03.681-07',
      'trans_status': 'ERROR',
      'trans_state': 'REQUEST_FROM_TP',
      'parent_id': null,
      'trans_desp': 'Received  startup request for Gateway HTTP Service ',
      'extra_props': '[{\'prop_name\': \'e\', \'prop_value\': \'G\'},' +
      '{\'prop_name\': \'KQ\', \'prop_value\': \'YJ\'},' +
      '{\'prop_name\': \'eHq\', \'prop_value\': \'PTy\'},' +
      '{\'prop_name\': \'vByB\', \'prop_value\': \'NagI\'},' +
       '{\'prop_name\': \'fdEXT\', \'prop_value\': \'Zorqp\'},' +
       '{\'prop_name\': \'JnoyWH\', \'prop_value\': \'pTNwiX\'},' +
      '{\'prop_name\': \'EFyUAGC\', \'prop_value\': \'UdKolYb\'}]',
      'bc_trans_hash': 'bLRyjk54FU1xu8mgRMPEnaHklPR6GcvwDo6JpvWDPfUJdb',
      'bc_trans_id': 'juLGsECtoRQwymPWkPNbrsXEZDrwIsZGWWKmislV',
      'create_ts': '2018-06-20T02:15:05.236-07:00',
      'payload_id': 'b526b0b8-a3aa-4b86-8f6c-e41349a131ef'
    },
    {
      'trans_id': 'f8068782-7666-488d-9df3-fa607c6d46a5',
      'user_id': 'd249ea76-2795-4b5b-a5c4-0b0feac429fe',
      'tsc_org_id': 'tibco1',
      'user_trans_id': '9c09eb86-357f-4d57-af4d-459ffebab4e8',
      'trans_source': 'Seller',
      'trans_destination': 'Buyer',
      'service_name': 'Vehicle Management',
      'trans_ts': '2018-06-20 02:15:05.632-07',
      'trans_status': 'ACK SENT',
      'trans_state': 'SUCCESS',
      'parent_id': '1ec9cde4-7195-402c-946c-af8f8df1ae24',
      'trans_desp': 'Received  startup request for Gateway HTTP Service  ',
      'extra_props': '[{\'prop_name\': \'e\', \'prop_value\': \'G\'},' +
      '{\'prop_name\': \'KQ\', \'prop_value\': \'YJ\'},' +
      '{\'prop_name\': \'eHq\', \'prop_value\': \'PTy\'},' +
      '{\'prop_name\': \'vByB\', \'prop_value\': \'NagI\'},' +
       '{\'prop_name\': \'fdEXT\', \'prop_value\': \'Zorqp\'},' +
       '{\'prop_name\': \'JnoyWH\', \'prop_value\': \'pTNwiX\'},' +
      '{\'prop_name\': \'EFyUAGC\', \'prop_value\': \'UdKolYb\'}]',
      'bc_trans_hash': '6Eq0FjhvGsaPyuSBhYe5gPrVFc6iGg4rblINxd5r2bTvC4',
      'bc_trans_id': 'gUjlKyoZJNxrtCKOTWpVPyOXWPUYuOrDVloUcPOS',
      'create_ts': '2018-06-20T02:15:05.752-07:00',
      'payload_id': 'e90a336f-e8ed-4f77-afe9-a7ac3c5dfa02'
    },
    {
      'trans_id': '434868e4-e804-4d00-ac0f-d75238a4127d',
      'user_id': 'd249ea76-2795-4b5b-a5c4-0b0feac429fe',
      'tsc_org_id': 'tibco1',
      'user_trans_id': '9c09eb86-357f-4d57-af4d-459ffebab4e8',
      'trans_source': 'Seller',
      'trans_destination': 'Buyer',
      'service_name': 'Vehicle Management',
      'trans_ts': '2018-06-20 02:15:05.927-07',
      'trans_status': 'PENDING',
      'trans_state': 'PACKAGED_RECEIPT',
      'parent_id': 'f8068782-7666-488d-9df3-fa607c6d46a5',
      'trans_desp': 'Received  startup request for Gateway HTTP Service  ',
      'extra_props': '[{\'prop_name\': \'e\', \'prop_value\': \'G\'},' +
      '{\'prop_name\': \'KQ\', \'prop_value\': \'YJ\'},' +
      '{\'prop_name\': \'eHq\', \'prop_value\': \'PTy\'},' +
      '{\'prop_name\': \'vByB\', \'prop_value\': \'NagI\'},' +
       '{\'prop_name\': \'fdEXT\', \'prop_value\': \'Zorqp\'},' +
       '{\'prop_name\': \'JnoyWH\', \'prop_value\': \'pTNwiX\'},' +
      '{\'prop_name\': \'EFyUAGC\', \'prop_value\': \'UdKolYb\'}]',
      'bc_trans_hash': 'A1Xlzpu9dgUHiOoFSER0GC0yHsTEk1ngqkSkf3T6ULTXd3',
      'bc_trans_id': 'zgmgYFvNtEJVzoHmnzxbONYVNiwbLRmhyyoWjGAQ',
      'create_ts': '2018-06-20T02:15:06.049-07:00',
      'payload_id': '9cce34c5-fd77-4ed9-b647-516bba4bd04a'
    },
    {
      'trans_id': 'cf2a161f-9ce7-44ed-84b9-a080f52e9194',
      'user_id': 'd249ea76-2795-4b5b-a5c4-0b0feac429fe',
      'tsc_org_id': 'tibco1',
      'user_trans_id': '9c09eb86-357f-4d57-af4d-459ffebab4e8',
      'trans_source': 'Seller',
      'trans_destination': 'Buyer',
      'service_name': 'Vehicle Management',
      'trans_ts': '2018-06-20 02:15:06.252-07',
      'trans_status': 'ACK SENT',
      'trans_state': 'PROCESSING_COMPLETE',
      'parent_id': '434868e4-e804-4d00-ac0f-d75238a4127d',
      'trans_desp': 'Received  startup request for Gateway HTTP Service  ',
      'extra_props': '[{\'prop_name\': \'e\', \'prop_value\': \'G\'},' +
      '{\'prop_name\': \'KQ\', \'prop_value\': \'YJ\'},' +
      '{\'prop_name\': \'eHq\', \'prop_value\': \'PTy\'},' +
      '{\'prop_name\': \'vByB\', \'prop_value\': \'NagI\'},' +
       '{\'prop_name\': \'fdEXT\', \'prop_value\': \'Zorqp\'},' +
       '{\'prop_name\': \'JnoyWH\', \'prop_value\': \'pTNwiX\'},' +
      '{\'prop_name\': \'EFyUAGC\', \'prop_value\': \'UdKolYb\'}]',
      'bc_trans_hash': 'YUGGhDulNdj1gkFyfVumbCZ7Qjq34XWmECO0tFf4SMp7vO',
      'bc_trans_id': 'UsoTMTJhzmukEZzPjBLHRiSjNyyqUMHSahRWeZeg',
      'create_ts': '2018-06-20T02:15:06.377-07:00',
      'payload_id': '9ac826ec-ee62-4125-af54-678ad5bafb66'
    },
    {
      'trans_id': 'a9c3993c-64c9-4df4-ad9e-d671d3d527e3',
      'user_id': 'd249ea76-2795-4b5b-a5c4-0b0feac429fe',
      'tsc_org_id': 'tibco1',
      'user_trans_id': '9c09eb86-357f-4d57-af4d-459ffebab4e8',
      'trans_source': 'Seller',
      'trans_destination': 'Buyer',
      'service_name': 'Vehicle Management',
      'trans_ts': '2018-06-20 02:15:06.537-07',
      'trans_status': 'VALIDATING',
      'trans_state': 'UNPACKAGE_MSG',
      'parent_id': 'cf2a161f-9ce7-44ed-84b9-a080f52e9194',
      'trans_desp': 'Received  startup request for Gateway HTTP Service  ',
      'extra_props': '[{\'prop_name\': \'e\', \'prop_value\': \'G\'},' +
      '{\'prop_name\': \'KQ\', \'prop_value\': \'YJ\'},' +
      '{\'prop_name\': \'eHq\', \'prop_value\': \'PTy\'},' +
      '{\'prop_name\': \'vByB\', \'prop_value\': \'NagI\'},' +
       '{\'prop_name\': \'fdEXT\', \'prop_value\': \'Zorqp\'},' +
       '{\'prop_name\': \'JnoyWH\', \'prop_value\': \'pTNwiX\'},' +
      '{\'prop_name\': \'EFyUAGC\', \'prop_value\': \'UdKolYb\'}]',
      'bc_trans_hash': 'gCfeQ3wPRIS5OzQnp7bcaY3luW69PDrRBPveK3l6u0Rcja',
      'bc_trans_id': 'yDLbbfsSoGHFhGuNKmLSeqSNNkIYSbnJQYvVYXKB',
      'create_ts': '2018-06-20T02:15:06.658-07:00',
      'payload_id': '40332c73-62cd-4b31-9549-4ec4deca8928'
    }
  ];

  columnDetailsResponse = [
    {
      'col_name': 'user_trans_id',
      'display_name': 'Transaction ID'
    },
    {
      'col_name': 'trans_source',
      'display_name': 'Source'
    },
    {
      'col_name': 'trans_destination',
      'display_name': 'Destination'
    },
    {
      'col_name': 'service_name',
      'display_name': 'Service Name'
    },
    {
      'col_name': 'trans_status',
      'display_name': 'Status'
    },
    {
      'col_name': 'trans_state',
      'display_name': 'State'
    },
    {
      'col_name': 'trans_ts',
      'display_name': 'Timestamp'
    },
    {
      'col_name': 'trans_desp',
      'display_name': 'Description'
    },
    {
      'col_name': 'extra_props',
      'display_name': 'Extra Information'
    }
  ];

  constructor(
    private http: HttpClient) {

  }
  getTransactionDetails(transactionId, userId) {
    /*return this.http.get(`${this.hitURL}/transactions/${this.tsc_org_id}/user-trans-id/${this.user_trans_id}`)
      .pipe(map(res => res.json()));*/
      return this.http.get(`${hitURL}/transactions/${transactionId}/user-trans-id/${userId}`);

  }
  getDisplayNamesForColumns() {
    return this.http.get(`${hitURL}/columnConfigs/detialPage`);
     // .pipe(map(res => res.json()));
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
