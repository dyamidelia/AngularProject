import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  	  	this.route.paramMap
  		.subscribe(params => {

  		console.log(params);
  		});
  }

}
