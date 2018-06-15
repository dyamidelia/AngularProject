import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
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
  showAddState=false;
  showAddStatus=false;
  //Add State Input Element
  @ViewChild('addState') private stateInput:ElementRef;
  //Add Status Input Element
  @ViewChild('addStatus') private statusInput:ElementRef;
  // Form state
  form=this.fb.group({
    state:['',Validators.required]
  });

  get state(){
    return this.form.get('state');
  }
  //Form state ends...


  constructor(private service:SettingsHttpService,private fb:FormBuilder,private dialog:MatDialog) {

    this.service.getStates()
    .subscribe(states=>{
      this.states=states;
    });
  }
  ngOnInit() {

  }
  ngAfterViewChecked(){
    //Focusing Add State I/p, on making the block visible.
    if(this.showAddState){
      this.stateInput.nativeElement.focus();
    }
  }

  //Form Logic
  addStateSubmit(){
    let {state}=this.form.value;
    this.states.unshift({state_name:state,state_desp:'desc',tsc_org_id:'org_1'});
    this.stateInput.nativeElement.value='';
    //hitting the Backend API with newState
    this.service.setState(state)
    .subscribe(response=>{});
  }
  openDelStateDialog(delStateId,delStateName){
    let dialogRef= this.dialog.open(DeleteDialogComponent,{
      width:'45%',
      data:{
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

  

}
