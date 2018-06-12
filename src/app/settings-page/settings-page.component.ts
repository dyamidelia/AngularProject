import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
export class SettingsPageComponent implements OnInit {
  isAddStateClick: boolean = false;
  constructor() { }

  ngOnInit() {
   
 
  }
  addState(){
    this.isAddStateClick = true;
  }
   States = [
    {id: 1, name:'Start'},
    {id: 2, name:'In Progress'},
    {id: 5, name:'End'}
];
Status = [
  {id: 1, name:'Recieve Transcation'},
  {id: 2, name:'Sending'},
  {id: 5, name:'Validating'}
];
  

}
