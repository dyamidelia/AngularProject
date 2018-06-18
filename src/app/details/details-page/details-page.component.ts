import { Component, OnInit } from '@angular/core';
import { NgRedux, select} from '@angular-redux/store';
import { ActivatedRoute } from '@angular/router';
import { IAppState} from '../../reducer'
import { ACTION1 } from '../actions'; 

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
