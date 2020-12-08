import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextDirectiveComponent } from './text-directive.component';

describe('TextDirectiveComponent', () => {
  let component: TextDirectiveComponent;
  let fixture: ComponentFixture<TextDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextDirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
