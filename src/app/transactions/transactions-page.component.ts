import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../reducer';
import { TransactionsService } from '../services/transactions.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { startGetTransactions, startGetColumns } from './transactions-page.actions';




@Component({
  selector: 'app-transactions-page',
  templateUrl: './transactions-page.component.html',
  styleUrls: ['./transactions-page.component.css']
})
export class TransactionsPageComponent implements OnInit {

  @select(s => s.transactions.columns) columns;
  @select(s => s.transactions.transactions) transactions;

  searchString = 'Please select a column to search by from the select on the left';
  colSelection = '';
  isOn = false;
  ifShowFiltersRow = false;
  ifShowColumnsRow = false;
  form;
  columnsData = [];
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];
  intDisplayedColumns = [];


  constructor(private service: TransactionsService, iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, fb: FormBuilder, private ngRedux: NgRedux<IAppState>) {

    //  svg icons
    iconRegistry.addSvgIcon(
      'ic-maintenance',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-maintenance.svg')
    );
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg')
    );
    iconRegistry.addSvgIcon(
      'ic-document',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-document.svg')
    );

    //  form builder
    this.form = fb.group({
      'Transaction ID': [],
      'Source': [],
      'Destination': [],
      'Service Name': [],
      'Status': [],
      'State': [],
      'Timestamp': [],
      topics: fb.array([]),
      searches: fb.array([]),
      searchResults: fb.array([]),
    });


  }

  removeResult(removeTopic: FormControl) {
    //  Remove Result from formArray
    const index = this.form.get('topics').controls.indexOf(removeTopic);
    this.form.get('topics').removeAt(index);
    this.form.get('searches').removeAt(index);
    //  Recall Backend

    //  IF empty??
    if (this.form.get('topics').length === 0) {
      //  this.clear();
      this.isOn = false;
      console.log('4');
    }

  }

  saveColumns() {
    //  Call Backend with Service and send it our variable.
    this.isOn = true;

    // (this.form.get('searchResults') as FormArray).push(this.form.get('topics'));
    // console.log(this.form.get('searchResults') as FormArray);
    // this.clear();
  }

  clear() {
    (this.form.get('topics') as FormArray).reset();
    (this.form.get('searches') as FormArray).reset();
  }

  addSearch(topic, colNames) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';

    (this.form.get('searches') as FormArray).push(new FormControl(this.colSelection));
    colNames.value = '';
    this.colSelection = '';

  }

  toggleColumn(column) {
    if (this.form.get(column).value && !this.intDisplayedColumns.includes(column)) {
      //  Change to redux dispatch Event
      //  Add the columnName from ColDisplayList
      this.intDisplayedColumns.push(column);
    } else {
      //  Change to redux dispatch Event
      //  Remove the columnName from ColDisplayList
      for (let i = this.intDisplayedColumns.length - 1; i >= 0; i--) {
        if (this.intDisplayedColumns[i] === column) {
          this.intDisplayedColumns.splice(i, 1);
          //   break;       //  <-- Uncomment  if only the first term has to be removed
        }
      }
    }
    console.log(this.intDisplayedColumns);
  }

  changeSearchText(event, myNewString) {
    if (event.isUserInput) {
      this.searchString = 'Please type the name of a(n) ' + myNewString;
      this.colSelection = myNewString;
    }
  }

  ngOnInit() {
    this.getColumns();
    this.getTransactions();
  }

  getTransactions() {
    startGetTransactions(this.service)
      .subscribe(action => this.ngRedux.dispatch(action));
  }

  getColumns() {
    startGetColumns(this.service)
      .subscribe(action => {
        this.ngRedux.dispatch(action);
        this.columnsData = action.columns;
      });
  }

  loadFilters() {
    this.ifShowFiltersRow = !this.ifShowFiltersRow;

  }

  loadColumnSelection() {
    this.ifShowColumnsRow = !this.ifShowColumnsRow;
  }

}
