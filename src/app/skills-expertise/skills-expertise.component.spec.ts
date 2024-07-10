import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsExpertiseComponent } from './skills-expertise.component';

describe('SkillsExpertiseComponent', () => {
  let component: SkillsExpertiseComponent;
  let fixture: ComponentFixture<SkillsExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SkillsExpertiseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
