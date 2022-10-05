import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpendLogComponent } from './spend-log.component';

describe('SpendLogComponent', () => {
  let component: SpendLogComponent;
  let fixture: ComponentFixture<SpendLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpendLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpendLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
