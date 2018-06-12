import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionDetailsSummaryComponent } from './transaction-details-summary.component';

describe('TransactionDetailsSummaryComponent', () => {
  let component: TransactionDetailsSummaryComponent;
  let fixture: ComponentFixture<TransactionDetailsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionDetailsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionDetailsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
