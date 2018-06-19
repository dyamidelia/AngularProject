import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

// Redux Block
import {NgRedux, select} from '@angular-redux/store';
import {ISettingsState} from './settings-page.reducer';
import {INIT_STATE, INIT_STATUS} from './settings-page.actions';

// Services
import {SettingsHttpService} from '../../app/services/settings-http.service';
@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})

export class SettingsPageComponent implements OnInit, AfterViewChecked {
  @select() settings;
  @select(s => s.settings.states) states;
  @select(s => s.settings.statuses) statuses;

  showAddState = false;
  showAddStatus = false;

  // Add State Input Element
  @ViewChild('addState') private stateInput: ElementRef;
  // Add Status Input Element
  @ViewChild('addStatus') private statusInput: ElementRef;

  // AddState Form
  form = this.fb.group({
    state: ['', Validators.required]
  });
  get state() {
    return this.form.get('state');
  }
  // EditState Form
  editForm = this.fb.group({
    state: ['', Validators.required]
  });

  // AddStatus Form
  statusForm = this.fb.group({
    status: ['', Validators.required]
  });
  get status() {
    return this.statusForm.get('status');
  }
  // EditState Form
  editStatusForm = this.fb.group({
    status: ['', Validators.required]
  });


  constructor(private redux: NgRedux <ISettingsState>,
              private service: SettingsHttpService,
              private fb: FormBuilder,
              private dialog: MatDialog) {
    // getting the states & initiallizing the store
    console.log(this.settings);
    this.service.getStates()
    .subscribe(states => {
      this.redux.dispatch({type: INIT_STATE, states});
      // this.states = states;
    });
    // getting the statuses
    this.service.getStatuses()
    .subscribe(statuses => {
      this.redux.dispatch({type: INIT_STATUS, statuses});
      // this.statuses = statuses;
    });

  }
  // <======================= Logic Starts Here =============================>

  ngOnInit() {

  }
  ngAfterViewChecked() {
    // Focusing Add State I/p, on making the block visible.
    this.toggleFocus(this.showAddState, this.stateInput);

    // Focusing Add Status I/p, on making the block visible.
    this.toggleFocus(this.showAddStatus, this.statusInput);

  }
  toggleFocus(condition, ele) {
    if (condition) {
      ele.nativeElement.focus();
    }
  }

  // Add State Form
  addStateSubmit() {
    const {state} = this.form.value;
    this.states.unshift({state_name: state, state_desp: 'desc', tsc_org_id: 'org_1'});
    this.form.controls['state'].setValue('');

    // hitting the Backend API with newState
    this.service.setState(state)
    .subscribe(response => {});
  }
  // Edit State Form
  editStateSubmit(stateObj) {
    const Fdata = this.editForm.value;
    stateObj.editState = false;

    if (Fdata.state !== stateObj.state_name && Fdata.state !== '') {
      this.states = this.states.map((state: any) => {
        return (state.state_id === stateObj.state_id) ? {...state, state_name: Fdata.state} : state;
      });

      // hitting the Backend API with newState
      this.service.editState({...Fdata, id: stateObj.state_id})
      .subscribe(response => console.log('edit state: response from server', response));
    }

  }
  // Add Status Form
  addStatusSubmit() {
    const {status} = this.statusForm.value;
    this.statuses.unshift({status_name: status, state_desp: 'desc', tsc_org_id: 'org_1'});
    this.statusForm.controls['status'].setValue('');

    // hitting the Backend API with newStatus
    this.service.setStatus(status)
    .subscribe(response => console.log('add status:response from server', response));
  }
  // Edit State Form
  editStatusSubmit(statusObj) {
    const Fdata = this.editStatusForm.value;
    statusObj.editStatus = false;

    if (Fdata.status !== statusObj.status_name && Fdata.status !== '') {
      this.statuses = this.statuses.map((status: any) => {
        return (status.status_id === statusObj.status_id) ? ({...status, status_name: Fdata.status}) : status;
      });
      // hitting the Backend API with newState
      this.service.editStatus({...Fdata, id: statusObj.status_id})
      .subscribe(response => console.log('edit status: response from server', response));
    }

  }
  // Delete State Dialog
  openDelStateDialog(delStateId, delStateName) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '45%',
      data: {
          confType: 'state',
          confPluralForm: 'states',
          delState: delStateName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.states = [...this.states.filter((state: any) => state.state_id !== delStateId)];
        // hitting the Backend API with delete state ID
        this.service.delState(delStateId)
        .subscribe(response => console.log('Delete State: response from server', response));
      }
    });

  }
  // Delete Status Dialog
  openDelStatusDialog(delStatusId, delStatusName) {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      width: '45%',
      data: {
          confType: 'status',
          confPluralForm: 'statuses',
          delState: delStatusName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.statuses = [...this.statuses.filter((status: any) => status.status_id !== delStatusId)];
        // hitting the Backend API with delete status ID
        this.service.delStatus(delStatusId)
        .subscribe(response => console.log('Delete Status: response from server', response));
      }
    });

  }



}
