import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder,Validators} from '@angular/forms';
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
  //Add State Input Element
  @ViewChild('addState') private stateInput:ElementRef;
  
  // Form state
  form=this.fb.group({
    state:['',Validators.required]
  });

  get state(){
    return this.form.get('state');
  }
  //Form state ends...

  constructor(private service:SettingsHttpService,private fb:FormBuilder) {
    this.service.getStates()
    .subscribe(states=>{
      this.states=states;
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

  //Form Logic
  addStateSubmit(){
    let {state}=this.form.value;
    this.states.unshift({state_name:state,state_desp:'desc',tsc_org_id:'org_1'});
    //hitting the Backend API with newState
    this.service.setState(state)
    .subscribe(response=>console.log(`response from server`,response));
  }


}
