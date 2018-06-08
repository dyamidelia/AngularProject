import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup, FormControl} from '@angular/forms';

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
   displayedColumns = ['position', 'name', 'weight', 'symbol'];

  form = new FormGroup({
    'col1' : new FormControl(),
    'col2' : new FormControl()

  })

  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'ic-maintenance',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-maintenance.svg')
      );
    iconRegistry.addSvgIcon(
        'ic-document',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-document.svg')
      );
  }

  saveColums(){
    this.displayedColumns = ['position', 'name', 'weight'];
    console.log(this.form.get('col1'));
  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);
  }
}
