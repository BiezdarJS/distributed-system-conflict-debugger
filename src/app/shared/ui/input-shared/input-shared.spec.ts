import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputShared } from './input-shared';

describe('InputShared', () => {
  let component: InputShared;
  let fixture: ComponentFixture<InputShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
