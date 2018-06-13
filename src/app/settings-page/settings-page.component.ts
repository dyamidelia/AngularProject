<<<<<<< Updated upstream
import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
=======
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Services
import {SettingsHttpService} from "../../services/settings-http.service";
>>>>>>> Stashed changes

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
<<<<<<< Updated upstream
export class SettingsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //  isAddStateClick:boolean = true;
 
  }
   States = [
    {id: 1, name:'Start'},
    {id: 2, name:'In Progress'},
    {id: 5, name:'End'}
];
  
=======
export class SettingsPageComponent implements OnInit,AfterViewInit {
  states:object[];
  showAddState=false;

  @ViewChild('addStateInput') stateInput:ElementRef;
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
  ngAfterViewInit(){

  }

  // form=this.fb.group({
  //   addState:['',Validators.required]
  // });

  toggleAddState(input){
    this.showAddState=true;
    // this.stateInput.focus();
    console.log(this.stateInput);
  }

>>>>>>> Stashed changes

}
