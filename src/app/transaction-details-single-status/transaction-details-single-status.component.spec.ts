import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsSingleStatusComponent } from './transaction-details-single-status.component';

describe('TransactionDetailsSingleStatusComponent', () => {
  let component: TransactionDetailsSingleStatusComponent;
  let fixture: ComponentFixture<TransactionDetailsSingleStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsSingleStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsSingleStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
