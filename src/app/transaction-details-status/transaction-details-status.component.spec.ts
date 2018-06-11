import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsStatusComponent } from './transaction-details-status.component';

describe('TransactionDetailsStatusComponent', () => {
  let component: TransactionDetailsStatusComponent;
  let fixture: ComponentFixture<TransactionDetailsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
