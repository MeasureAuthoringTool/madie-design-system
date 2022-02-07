import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconComponent } from './icon.component';
import { IconsService } from './icons.service';

describe('IconComponent', () => {
  let component: IconComponent;
  let fixture: ComponentFixture<IconComponent>;
  const iconsService = jasmine.createSpyObj<IconsService>(['loadIcons']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IconComponent],
      providers: [
        { provide: IconsService, useValue: iconsService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load icons', () => {
    expect(iconsService.loadIcons).toHaveBeenCalled();
  });
});
