import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import { NgRedux, select} from '@angular-redux/store';
import { IAppState} from '../store'


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;

   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
   intDisplayedColumns = ['position', 'name', 'weight', 'symbol'];
   displayedColumns = ['position', 'name', 'weight', 'symbol'];
   form;
   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, fb: FormBuilder, private ngRedux: NgRedux<IAppState>) {
    //svg icons
    iconRegistry.addSvgIcon(
        'ic-maintenance',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-maintenance.svg')
      );
    iconRegistry.addSvgIcon(
        'ic-document',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-document.svg')
      );
    
    //form builder
    this.form = fb.group({
      'position': [],
      'name': [],
      'weight': [],
      'symbol': []
    })
  }

  saveColumns(){
    //Call Backend with Service and send it our variable.
  }

  toggleColumn(column){

    console.log(this.form.get(column).value);

    if (this.form.get(column).value && !this.intDisplayedColumns.includes(column)){
      //Change to redux dispatch Event
       //Add the columnName from ColDisplayList
       this.intDisplayedColumns.push( column );
    }
    else{
      //Change to redux dispatch Event
      //Remove the columnName from ColDisplayList
      for (let i=this.intDisplayedColumns.length-1; i>=0; i--) {
        if (this.intDisplayedColumns[i] === column) {
          this.intDisplayedColumns.splice(i, 1);
            // break;       //<-- Uncomment  if only the first term has to be removed
        }
      }
    }

  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);

    //Get Data from Backend via Service

    //Set To checked
    this.form.get('position').setValue('checked');
    this.form.get('name').setValue('checked');
    this.form.get('weight').setValue('checked');
    this.form.get('symbol').setValue('checked');
  }
}
