import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState } from '../reducer';
import { TransactionsService } from '../services/transactions.service';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { startGetTransactions, startGetColumns, addColumn, hideColumn, startPostColumns, GET_TRANSACTIONS_SUCCESS } from './transactions-page.actions';
import { map } from 'rxjs/operators';




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
  colSelectionId = '';
  isOn = false;
  ifShowFiltersRow = false;
  ifShowColumnsRow = false;
  ifShowFilterResultsDiv = false;
  filterButtonEnabled = false;
  form;
  filterForm;
  filteredSelectedList = [];
  columnsData = [];
  isValidAddForm = false;
  canAddFitlers = true;
  canSearchFitlers = false;
  transactionsData = [];
  totalPages = 0;
  postData = [];

  //  Sorting Vars
  order = 'trans_status';
  order2 = 'display_name';
  ascending = true;


  constructor(private service: TransactionsService, iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer, private fb: FormBuilder, private ngRedux: NgRedux<IAppState>) {

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
      searchResultsData: fb.array([])
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

  saveColumnsFilter() {

    let columnArray = JSON.parse(JSON.stringify(this.columnsData));

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




  toggleColumn(columnDisplayName, columnColName) {

    if (this.form.get(columnDisplayName).value) {
      // Make Column Data Real.
      this.ngRedux.dispatch(addColumn({ col_name: columnColName, display_name: columnDisplayName, is_visible: true }));
    } else {
      // Make Column Data Real.
      this.ngRedux.dispatch(hideColumn({ col_name: columnColName, display_name: columnDisplayName, is_visible: false }));
    }
  }

  changeSearchText(event, myNewString, searchID) {
    if (event.isUserInput) {
      this.searchString = 'Please type the name of a(n) ' + myNewString;
      this.colSelection = myNewString;
      this.colSelectionId = searchID;
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
        const filterColumnFields = {};
        for (let i = 0; i < this.columnsData.length; i++) {
          filterColumnFields[this.columnsData[i].col_name] = [];
        }
        this.filterForm = this.fb.group(filterColumnFields);
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

  /*Added Filter Search Functionliatites--Anusha Changes */

  getSearchFilterResults() {
    this.service.searchFilterColumns(this.postData).subscribe((transactions: any[]) => {
      this.ngRedux.dispatch({
        type: GET_TRANSACTIONS_SUCCESS,
        transactions
      });
    });
  }

  onSearchClick() {
    //    Call Backend with Service and send it our variable.
    this.isOn = true;
    this.canSearchFitlers = false;
    //  this.form.patchValue({searchResults:[...this.form.get('searchResults'), ...this.form.get('topics')]});
    //  this.form.set('searchResults',);
    const len = this.form.get('searches').length;

    for (let i = 0; i < len; i++) {
      (this.form.get('searchResults') as FormArray).push(this.form.get('searches').at(i));
    }

    /* while (this.form.get('searches').length !== 0) {
       this.form.get('searches').removeAt(0);
       this.form.get('topics').removeAt(0);
     }*/
    this.getSearchFilterResults();
  }

  addSearch(topic, colNames, colId) {
    this.postData = [];
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';

    (this.form.get('searches') as FormArray).push(new FormControl(this.colSelection));
    (this.form.get('searchResultsData') as FormArray).push(new FormControl(this.colSelectionId));
    colNames.value = '';
    this.colSelection = '';

    this.isValidAddForm = false;
    this.canSearchFitlers = true;
    const getSearchResultsData = this.form.get('searchResultsData').value;
    const getTopics = this.form.get('topics').value;
    for (let i = 0; i < getTopics.length; i++) {
      this.postData.push({
        'col_name': getSearchResultsData[i],
        'operation': '=',
        'col_value': getTopics[i]
      });
    }

    // this.getTransactions(); have an array to send to filters.
  }
  removeSearchResult(removeTopic) {
    //  Remove Result from formArray
    let index;
    index = this.form.get('topics').controls.indexOf(removeTopic);
    this.form.get('topics').removeAt(index);
    this.form.get('searches').removeAt(index);
    this.postData.splice(index, 1);
    if (this.form.get('searches').length === 0) {
      this.isOn = false;
      this.canAddFitlers = true;
    }
    this.getSearchFilterResults();

  }
  removeFilterResult(filterData) {
    const getFilteredValue = this.filterForm.value;
    this.filteredSelectedList = [...this.filteredSelectedList.filter(item => item.value !== filterData.value)];
    this.filterForm.controls[filterData.key].setValue('');
    this.postData = [...this.postData.filter(item => item.col_value !== filterData.value)];
    this.getSearchFilterResults();
    if (this.postData && this.postData.length === 0) {
      this.clearFilters();
      this.filterButtonEnabled = false;
    }
  }
  filterTextValueChange() {
    this.filterButtonEnabled = true;
  }

  onFilterClick() {
    const getFilteredColumns = this.filterForm.value;
    this.filteredSelectedList = [];
    if (getFilteredColumns) {
      for (const key in getFilteredColumns) {
        if (getFilteredColumns[key] && getFilteredColumns[key] !== null) {
          this.postData.push({
            'col_name': key,
            'operation': '=',
            'col_value': getFilteredColumns[key]
          });
          this.filteredSelectedList.push({ key: key, value: getFilteredColumns[key] });
          this.ifShowFilterResultsDiv = true;
        }
      }

      this.getSearchFilterResults();


    }
  }
  clearFilters() {
    this.filteredSelectedList = [];
    this.filterForm.reset();
    this.ifShowFilterResultsDiv = false;
  }


}
