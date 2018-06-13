import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Services
import {SettingsHttpService} from "../../services/settings-http.service";
@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit,AfterViewChecked {
  states:object[];
  showAddState=false;
  @ViewChild('addState') private stateInput:ElementRef;
  constructor(private service:SettingsHttpService) {

    this.service.getStates()
    .subscribe(states=>{
      this.states=states;
      // console.log(this.states);
    });
  }

  ngOnInit() {
  //  isAddStateClick:boolean = true;

  }
  ngAfterViewChecked(){
    if(this.showAddState){
      this.stateInput.nativeElement.focus();
    }
  }
  // form=this.fb.group({
  //   addState:['',Validators.required]
  // });

  toggleAddState(input){
    this.showAddState=true;
  }

}
