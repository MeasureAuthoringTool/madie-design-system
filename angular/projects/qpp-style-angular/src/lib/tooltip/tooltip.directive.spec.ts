import { Component, DebugElement } from '@angular/core';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';

import { CMSTooltipModule } from './tooltip.module';
import { By } from '@angular/platform-browser';

@Component({
  template: ` <span cmsTooltip [body]="false" [text]="'Tooltip text'"></span> `,
})
class TestHostComponent {}

describe('TooltipDirective', (): void => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let spanEl: DebugElement;
  let tooltipEl: any;

  function createComponent(): void {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }

  beforeEach(async((): void => {
    TestBed.configureTestingModule({
      imports: [CMSTooltipModule],
      declarations: [TestHostComponent],
    }).compileComponents();
    createComponent();
    spanEl = fixture.debugElement.query(By.css('span'));
  }));

  it('should exist', (): void => {
    expect(component).toBeDefined();
  });

  describe('tooltip', () => {
    beforeEach(() => {
      spanEl.triggerEventHandler('mouseenter', null);
      tooltipEl = spanEl.nativeElement.querySelector('.tool-tip');
    });
    afterEach(() => {
      spanEl.triggerEventHandler('mouseleave', null);
    });
    it('should display', () => {
      expect(tooltipEl).toBeDefined();
    });
    it('should display accurate tool tip text', () => {
      expect(tooltipEl.innerHTML.trim()).toBe('Tooltip text');
    });
    it('should not display erroneous text', () => {
      expect(tooltipEl.innerHTML.trim()).not.toBe('Lorem Ipsum');
    });
    it('should default to tool-tip--top class', () => {
      expect(tooltipEl.classList).toContain('tool-tip--top');
    });
    it('should not default to an erroneous class', () => {
      expect(tooltipEl.classList).not.toContain('tool-tip--erroneous');
    });
  });
});
