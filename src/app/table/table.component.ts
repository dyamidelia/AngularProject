import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TableDataSource } from './table-datasource';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormGroup, FormControl, FormArray, FormBuilder} from '@angular/forms';
import { NgRedux, select} from '@angular-redux/store';
import { IAppState} from '../store';
import { TableService } from './services/table.service';


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TableDataSource;
  @select((s:IAppState) => s.table.todos) todos;
  @select((s:IAppState) => s.table.transactions) transactions;


   /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
   searchString = "Please select a column to search by from the select on the left" ;
   colSelection = "";
   isOn = false;
   //intDisplayedColumns = [];
   intDisplayedColumns = ['position', 'name', 'weight', 'symbol'];
   displayedColumns = ['position', 'name', 'weight', 'symbol'];
   form;
   foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private service: TableService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, fb: FormBuilder, private ngRedux: NgRedux<IAppState>) {
    /*
    ngRedux.subscribe(()=>{
      let s = ngRedux.getState();
      this.intDisplayedColumns = s.table.todos.map((el)=>{
        
        console.log(el);
        return el.display_name
      });
      debugger;
      console.log(this.intDisplayedColumns);
    }); */
    
    //svg icons
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
    
    //form builder
    this.form = fb.group({
      'position': [],
      'name': [],
      'weight': [],
      'symbol': [],
      'actions': [],
      'filters': [],
      topics: fb.array([]),
      searches: fb.array([]),
      searchResults: fb.array([]),
    })

  }

  removeResult(removeTopic: FormControl){
    //Remove Result from formArray
    let index = this.form.get('topics').controls.indexOf(removeTopic);
    this.form.get('topics').removeAt(index);
    this.form.get('searches').removeAt(index);
    //Recall Backend

    //IF empty??
    if ( this.form.get('topics').length == 0 ){
      //this.clear();
      this.isOn = false;
      console.log('4');
    }
  
  }

  saveColumns(){
    //Call Backend with Service and send it our variable.
    this.isOn = true;
    
    //(this.form.get('searchResults') as FormArray).push(this.form.get('topics'));
    //console.log(this.form.get('searchResults') as FormArray);
    //this.clear();
  }

  clear(){
    (this.form.get('topics') as FormArray).reset();
    (this.form.get('searches') as FormArray).reset();
  }
  addSearch(topic, colNames){
    (this.form.get('topics') as FormArray).push(new FormControl(topic.value));
    topic.value = '';

    (this.form.get('searches') as FormArray).push(new FormControl(this.colSelection));
    colNames.value = '';
    this.colSelection ='';

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

  changeSearchText( event, myNewString ){
    if (event.isUserInput){
      this.searchString = "Please type the name of a(n) " + myNewString;
      this.colSelection = myNewString;
    }
  }

  ngOnInit() {
    this.dataSource = new TableDataSource(this.paginator, this.sort);
    this.service.loadTransactions();
    this.service.loadColumnHeaders();

    //this.todos.subscribe(todos => this.intDisplayedColumns = todos.map(todo => todo.col_name));
    //Get Data from Backend via Service

    //Set To checked
    this.form.get('position').setValue('checked');
    this.form.get('name').setValue('checked');
    this.form.get('weight').setValue('checked');
    this.form.get('symbol').setValue('checked');
  }
}
