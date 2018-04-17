import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialToolbarComponent } from './social-toolbar.component';

describe('SocialToolbarComponent', () => {
  let component: SocialToolbarComponent;
  let fixture: ComponentFixture<SocialToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
