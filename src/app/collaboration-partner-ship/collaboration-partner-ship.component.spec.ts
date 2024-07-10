import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationPartnerShipComponent } from './collaboration-partner-ship.component';

describe('CollaborationPartnerShipComponent', () => {
  let component: CollaborationPartnerShipComponent;
  let fixture: ComponentFixture<CollaborationPartnerShipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollaborationPartnerShipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationPartnerShipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
