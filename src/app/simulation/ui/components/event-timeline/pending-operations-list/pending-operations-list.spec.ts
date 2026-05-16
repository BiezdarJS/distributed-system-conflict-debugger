import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOperationsList } from './pending-operations-list';

describe('PendingOperationsList', () => {
  let component: PendingOperationsList;
  let fixture: ComponentFixture<PendingOperationsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingOperationsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingOperationsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
