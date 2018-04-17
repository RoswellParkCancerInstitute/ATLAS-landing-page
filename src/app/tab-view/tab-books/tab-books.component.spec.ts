import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabBooksComponent } from './tab-books.component';

describe('TabBooksComponent', () => {
  let component: TabBooksComponent;
  let fixture: ComponentFixture<TabBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
