import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareaShared } from './textarea-shared';

describe('TextareaShared', () => {
  let component: TextareaShared;
  let fixture: ComponentFixture<TextareaShared>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaShared]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextareaShared);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
