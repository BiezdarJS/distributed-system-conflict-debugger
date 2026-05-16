import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOperation } from './pending-operation';

describe('PendingOperation', () => {
  let component: PendingOperation;
  let fixture: ComponentFixture<PendingOperation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PendingOperation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PendingOperation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
