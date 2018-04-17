import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabAppsComponent } from './tab-apps.component';

describe('TabAppsComponent', () => {
  let component: TabAppsComponent;
  let fixture: ComponentFixture<TabAppsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabAppsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabAppsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
