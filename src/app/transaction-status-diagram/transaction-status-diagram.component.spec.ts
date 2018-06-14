import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionStatusDiagramComponent } from './transaction-status-diagram.component';

describe('TransactionStatusDiagramComponent', () => {
  let component: TransactionStatusDiagramComponent;
  let fixture: ComponentFixture<TransactionStatusDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionStatusDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionStatusDiagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
