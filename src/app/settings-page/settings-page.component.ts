import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.css']
})
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
  

}
