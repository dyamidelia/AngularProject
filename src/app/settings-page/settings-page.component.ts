import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import {MatDialog} from "@angular/material/dialog";
import {DeleteDialogComponent} from "./delete-dialog/delete-dialog.component";
//Services
import {SettingsHttpService} from "../../services/settings-http.service";
@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit, AfterViewChecked {
  states:object[];
  statuses:object[];
  showAddState=false;
  showAddStatus=false;

  //Add State Input Element
  @ViewChild('addState') private stateInput:ElementRef;
  //Add Status Input Element
  @ViewChild('addStatus') private statusInput:ElementRef;

  //AddState Form
  form=this.fb.group({
    state:['',Validators.required]
  });
  get state(){
    return this.form.get('state');
  }
  //EditState Form
  editForm=this.fb.group({
    state:['',Validators.required],
    id:['']
  });

  //AddStatus Form
  statusForm=this.fb.group({
    status:['',Validators.required]
  });
  get status(){
    return this.statusForm.get('status');
  }

  constructor(private service:SettingsHttpService,private fb:FormBuilder,private dialog:MatDialog) {
    // getting the states
    this.service.getStates()
    .subscribe(states=>{
      this.states=states;
    });
    //getting the statuses
    this.service.getStatuses()
    .subscribe(statuses=>{
      this.statuses=statuses;
    });
  }
  ngOnInit() {
  //  isAddStateClick:boolean = true;

  }
  ngAfterViewChecked(){
    //Focusing Add State I/p, on making the block visible.
    if(this.showAddState){
      this.stateInput.nativeElement.focus();
    }
  }

  //Add State Form Logic
  addStateSubmit(){
    let {state}=this.form.value;
    this.states.unshift({state_name:state,state_desp:'desc',tsc_org_id:'org_1'});
    this.stateInput.nativeElement.value='';
    //hitting the Backend API with newState
    this.service.setState(state)
    .subscribe(response=>{});
  }
  // Edit State Form Logic
  editStateSubmit(stateObj){
    stateObj.editState=false;
    if (this.editForm.value.state!==stateObj.state_name && this.editForm.value.state!='') {
      this.states = this.states.map((state:any)=>{
        return (state.state_id===stateObj.state_id)?{...state,state_name:this.editForm.value.state}:state;
      });

      //hitting the Backend API with newState
      this.service.editState({...this.editForm.value,id:stateObj.state_id})
      .subscribe(response=>console.log("edit state: response from server",response));
    }

  }
  //Add Status Form Logic
  addStatusSubmit(){
    let {status}=this.statusForm.value;
    this.statuses.unshift({status_name:status,state_desp:'desc',tsc_org_id:'org_1'});
    this.statusInput.nativeElement.value='';
    //hitting the Backend API with newStatus
    this.service.setStatus(status)
    .subscribe(response=>console.log("add status:response from server",response));
  }
  // Delete State Dialog logic
  openDelStateDialog(delStateId,delStateName){
    let dialogRef= this.dialog.open(DeleteDialogComponent,{
      width:'45%',
      data:{
          confType:'State',
          delState:delStateName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.states=[...this.states.filter((state:any)=>state.state_id!=delStateId)];
        // hitting the Backend API with delete state ID
        this.service.delState(delStateId)
        .subscribe(response=>{
          console.log("Delete State: response from server",response);
        });
      }
    });

  }
  // Delete Status Dialog logic
  openDelStatusDialog(delStatusId,delStatusName){
    let dialogRef= this.dialog.open(DeleteDialogComponent,{
      width:'45%',
      data:{
          confType:'Status',
          delState:delStatusName
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.statuses=[...this.statuses.filter((status:any)=>status.status_id!=delStatusId)];
        // hitting the Backend API with delete state ID
        this.service.delStatus(delStatusId)
        .subscribe(response=>{
          console.log("Delete Status: response from server",response);
        });
      }
    });

  }

}
