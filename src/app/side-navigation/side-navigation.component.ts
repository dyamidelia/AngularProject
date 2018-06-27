import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.less']
})
export class SideNavigationComponent implements OnInit {
  navList = [{ name: 'Home', path: 'home' },
  { name: 'Transactions', path: 'transactions' },
  { name: 'Transactions Details', path: 'transactionsDetails' },
  { name: 'Settings', path: 'settings' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
