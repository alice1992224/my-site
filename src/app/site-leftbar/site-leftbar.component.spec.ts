import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteLeftbarComponent } from './site-leftbar.component';

describe('SiteLeftbarComponent', () => {
  let component: SiteLeftbarComponent;
  let fixture: ComponentFixture<SiteLeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteLeftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
