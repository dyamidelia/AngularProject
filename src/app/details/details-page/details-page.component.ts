import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux, select } from 'ng2-redux'; 
import { IAppState } from '../../store'; 
import { INCREMENT, DECREMENT } from '../actions'; 

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  	  	this.route.paramMap
  		.subscribe(params => {

  		console.log(params);
  		});
  }

}
