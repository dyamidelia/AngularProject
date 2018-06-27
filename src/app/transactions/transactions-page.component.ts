import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../reducer';
import { TransactionsService } from '../services/transactions.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { startGetTransactions, startGetColumns, addColumn, hideColumn, startPostColumns } from './transactions-page.actions';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';




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
  isValidAddForm = false;
  canAddFitlers = true;
  canSearchFitlers = false;
  transactionsData = [];
  totalPages = 0;

  //  Sorting Vars
  order = 'trans_status';
  order2 = 'display_name';
  ascending = true;


  constructor(private service: TransactionsService, iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, fb: FormBuilder, private ngRedux: NgRedux<IAppState>, private router: Router) {

    // svg icons I am sure there is a better way to add these
    iconRegistry.addSvgIcon(
      'ic-filter',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-filter.svg')
    );
    iconRegistry.addSvgIcon(
      'search',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/search.svg')
    );
    iconRegistry.addSvgIcon(
      'ic-settings',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-settings.svg')
    );
    iconRegistry.addSvgIcon(
      'ic-sort',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/ic-sort.svg')
    );

    //    form builder
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

  canAddSearchs() {
    return this.canAddFitlers;
  }

  isValidForm() {
    return this.isValidAddForm;
  }

  canSearch() {
    return this.canSearchFitlers;
  }

  removeResult(removeTopic: FormControl) {
    //  Remove Result from formArray
    const index = this.form.get('searchResults').controls.indexOf(removeTopic);
    this.form.get('searchResults').removeAt(index);
    //  this.form.get('searches').removeAt(index);
    //  Recall Backend

    //  IF empty??
    if (this.form.get('searchResults').length === 0) {
      this.isOn = false;
      this.canAddFitlers = true;
    }
  }

  saveColumnsFilter() {

    let columnArray = JSON.parse(JSON.stringify(this.columnsData))

    // Remove the un-needed data
    columnArray.forEach(function (entry) {
      delete entry['display_name'];
      delete entry['is_searchable'];
    });

    // Rename the keys until the backend changes data
    columnArray = columnArray.map(function (obj) {
      return {
        colName: obj.col_name,
        visible: obj.is_visible
      };
    });

    console.log(columnArray);
    // make the post call
    startPostColumns(this.service, columnArray);
  }

  saveFilter() {

  }

  saveColumns() {
    //    Call Backend with Service and send it our variable.
    this.isOn = true;
    this.canSearchFitlers = false;
    //  this.form.patchValue({searchResults:[...this.form.get('searchResults'), ...this.form.get('topics')]});
    //  this.form.set('searchResults',);
    const len = this.form.get('searches').length;

    for (let i = 0; i < len; i++) {
      (this.form.get('searchResults') as FormArray).push(this.form.get('searches').at(i));
    }

    while (this.form.get('searches').length !== 0) {
      this.form.get('searches').removeAt(0);
      this.form.get('topics').removeAt(0);
    }
  }

  addSearch(topic, colNames) {
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';

    (this.form.get('searches') as FormArray).push(new FormControl(this.colSelection));
    colNames.value = '';
    this.colSelection = '';

    this.isValidAddForm = false;
    this.canSearchFitlers = true;

    // this.getTransactions(); have an array to send to filters.
  }

  toggleColumn(columnDisplayName, columnColName) {

    if (this.form.get(columnDisplayName).value) {
      // Make Column Data Real.
      this.ngRedux.dispatch(addColumn({ col_name: columnColName, display_name: columnDisplayName, is_visible: true }));
    } else {
      // Make Column Data Real.
      this.ngRedux.dispatch(hideColumn({ col_name: columnColName, display_name: columnDisplayName, is_visible: false }));
    }
  }

  changeSearchText(event, myNewString) {
    if (event.isUserInput) {
      this.searchString = 'Please type the name of a(n) ' + myNewString;
      this.colSelection = myNewString;
      this.isValidAddForm = true;
    }
  }

  ngOnInit() {
    this.getColumns();
    this.getTransactions();
  }

  getTransactions() {
    startGetTransactions(this.service)
      .subscribe(action => {
        this.ngRedux.dispatch(action);
        this.transactionsData = action.transactions;
      });
  }

  getColumns() {
    startGetColumns(this.service)
      .subscribe(action => {
        this.ngRedux.dispatch(action);
        this.columnsData = action.columns;
      });
  }

  // Can combine these two functions that toggle the states of the header buttons into one.
  loadFilters() {
    this.ifShowFiltersRow = !this.ifShowFiltersRow;
    if (this.ifShowColumnsRow) {
      this.ifShowColumnsRow = !this.ifShowColumnsRow;
    }
  }
  loadColumnSelection() {
    this.ifShowColumnsRow = !this.ifShowColumnsRow;
    if (this.ifShowFiltersRow) {
      this.ifShowFiltersRow = !this.ifShowFiltersRow;
    }
  }

  sortColumn(columnName) {
    // Change Icon State
    // Sort Column with Dispatch Redux Action to Map/Filter the array state?
  }
  redirectToDetailsPage(i) {
    this.router.navigate(['transactions/org_1/user-trans-id', i.user_trans_id]);

  }
}
