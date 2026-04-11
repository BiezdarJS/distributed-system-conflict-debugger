import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenariosPage } from './scenarios.page';

describe('ScenariosPage', () => {
  let component: ScenariosPage;
  let fixture: ComponentFixture<ScenariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScenariosPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScenariosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
