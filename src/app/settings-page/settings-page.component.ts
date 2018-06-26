import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {DeleteDialogComponent} from './delete-dialog/delete-dialog.component';

// Redux Block
import {NgRedux, select} from '@angular-redux/store';
import {ISettingsState} from './settings-page.reducer';
import {INIT_STATE, ADD_STATE, EDIT_STATE, DELETE_STATE,
        INIT_STATUS, ADD_STATUS, EDIT_STATUS, DELETE_STATUS} from './settings-page.actions';

// Services
import {SettingsHttpService} from '../../app/services/settings-http.service';
@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.less']
})

export class SettingsPageComponent implements OnInit, AfterViewChecked {
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
    this.form.controls['state'].setValue('');

    // hitting the Backend API with newState & updating the states in store with new state
    this.service.setState(state)
    .subscribe((response: any) => {
        console.log('add state:response from server', response);
        this.redux.dispatch({
          type: ADD_STATE,
          newState: {state_name: state, state_desp: 'desc', tsc_org_id: 'org_1', state_id: response.state_id}
        }); // dispatch ends
    }, (error) => {
      console.log('server is not responding!', error);
    });
  }
  // Edit State Form
  editStateSubmit(stateObj) {
    const Fdata = this.editForm.value;
    stateObj.editState = false;

    if (Fdata.state !== stateObj.state_name && Fdata.state !== '') {

      // hitting the Backend API with newState
      this.service.editState({...Fdata, id: stateObj.state_id})
      .subscribe(response => {
        console.log('edit state: response from server', response);
        this.redux.dispatch({
            type: EDIT_STATE,
            newStateName: Fdata.state,
            currentState: stateObj
        }); // dispatch ends
    }, (error) => {
      console.log('server is not responding!', error);
    });
    }

  }
  // Add Status Form
  addStatusSubmit() {
    const {status} = this.statusForm.value;
    this.statusForm.controls['status'].setValue('');

    // hitting the Backend API with newStatus
    this.service.setStatus(status)
    .subscribe((response: any) => {
        console.log('add status:response from server', response);
        this.redux.dispatch({
          type: ADD_STATUS,
          newStatus: {status_name: status, status_desp: 'desc', tsc_org_id: 'org_1', status_id: response.status_id}
        }); // dispatch ends
    }, (error) => {
      console.log('server is not responding!', error);
    });
  }
  // Edit State Form
  editStatusSubmit(statusObj) {
    const Fdata = this.editStatusForm.value;
    statusObj.editStatus = false;

    if (Fdata.status !== statusObj.status_name && Fdata.status !== '') {

      // hitting the Backend API with newState
      this.service.editStatus({...Fdata, id: statusObj.status_id})
      .subscribe(response => {
        console.log('edit status: response from server', response);
        this.redux.dispatch({
            type: EDIT_STATUS,
            newStatusName: Fdata.status,
            currentStatus: statusObj
        }); // dispatch ends
    }, (error) => {
      console.log('server is not responding!', error);
    });
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
        // hitting the Backend API with delete state ID
        this.service.delState(delStateId)
        .subscribe(response => {
          console.log('Delete State: response from server', response);
          this.redux.dispatch({
            type: DELETE_STATE,
            delStateId
          }); // dispatch ends
        }, (error) => {
          console.log('Delete State: server is not responding!', error);
        });
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
        // hitting the Backend API with delete status ID
        this.service.delStatus(delStatusId)
        .subscribe(response => {
          console.log('Delete Status: response from server', response);
          this.redux.dispatch({
            type: DELETE_STATUS,
            delStatusId
          }); // dispatch ends
        }, (error) => {
          console.log('Delete Status: server is not responding!', error);
        });
      }
    });

  }



}
