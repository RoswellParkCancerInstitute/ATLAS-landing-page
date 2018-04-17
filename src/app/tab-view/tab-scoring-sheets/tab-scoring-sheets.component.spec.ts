import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabScoringSheetsComponent } from './tab-scoring-sheets.component';

describe('TabScoringSheetsComponent', () => {
  let component: TabScoringSheetsComponent;
  let fixture: ComponentFixture<TabScoringSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabScoringSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabScoringSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
