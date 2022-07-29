import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAdminViewComponent } from './profile-admin-view.component';

describe('ProfileAdminViewComponent', () => {
  let component: ProfileAdminViewComponent;
  let fixture: ComponentFixture<ProfileAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileAdminViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
