import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TooltipComponent } from './tooltip.component';

describe('TooltipComponent', () => {
  let component: TooltipComponent;
  let fixture: ComponentFixture<TooltipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TooltipComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have attribute aria-live for accessibility', () => {
    const tooltipSpan = fixture.debugElement.query(By.css('span.tool-tip'));
    expect(tooltipSpan).toBeTruthy();
    expect(tooltipSpan.nativeElement.getAttribute('aria-live')).toEqual(
      'polite'
    );
  });

  describe('tooltipClass', () => {
    it('should get the correct tooltip class for top position', () => {
      component.position = 'top';
      component.body = false;
      expect(component.tooltipClass).toEqual('tool-tip--top');
    });

    it('should get the correct tooltip class for bottom position', () => {
      component.position = 'bottom';
      component.body = false;
      expect(component.tooltipClass).toEqual('tool-tip--bottom');
    });

    it('should get the correct tooltip class for right position', () => {
      component.position = 'right';
      component.body = false;
      expect(component.tooltipClass).toEqual('tool-tip--right');
    });

    it('should get the correct tooltip class for left position', () => {
      component.position = 'left';
      component.body = false;
      expect(component.tooltipClass).toEqual('tool-tip--left');
    });

    it('should get the correct tooltip class for body placement with position', () => {
      component.position = 'left';
      component.body = true;
      expect(component.tooltipClass).toContain('tool-tip--body');
    });

    it('should get the correct tooltip class for body placement without position', () => {
      component.body = true;
      expect(component.tooltipClass).toContain('tool-tip--body');
    });

    it('should have a top oriented offset given an offset and no body', () => {
      component.offset = 'left';
      expect(component.tooltipClass).toContain('tool-tip--offset-left-top');
    });

    it('should have a custom tooltip class and a top oriented class given a body and an offset', () => {
      component.body = true;
      component.offset = 'left';
      expect(component.tooltipClass).toContain('tool-tip--body');
      expect(component.tooltipClass).toContain('tool-tip--offset-left-top');
    });

    describe('should have default tooltip position class', () => {
      beforeEach(() => {
        component.position = null;
        component.body = null;
        component.offset = null;
        component.customClass = null;
      });

      it('given no position, body nor offset', () => {
        expect(component.tooltipClass).toContain('tool-tip--top');
      });

      it('given no position nor offset', () => {
        component.body = true;
        expect(component.tooltipClass).toContain('tool-tip--top');
      });

      it('given no position nor body', () => {
        component.offset = 'left';
        expect(component.tooltipClass).toContain('tool-tip--top');
      });

      it('given no position', () => {
        component.body = true;
        component.offset = 'left';
        expect(component.tooltipClass).toContain('tool-tip--top');
      });

      it('given position top', () => {
        component.position = 'top';
        expect(component.tooltipClass).toEqual('tool-tip--top');
      });

      it('given no customClass', () => {
        expect(component.tooltipClass).toEqual('tool-tip--top');
      });

      it('given customClass top', () => {
        component.customClass = 'tool-tip--custom-style';
        expect(component.tooltipClass).toContain('tool-tip--top');
        expect(component.tooltipClass).toContain('tool-tip--custom-style');
      });
    });

    describe('tooltip text', () => {
      const tooltipText = 'correct tooltip text';
      const erroneousText = 'incorrect tooltip text';

      beforeEach(() => {
        component.text = tooltipText;
      });

      it('should be correct', () => {
        expect(fixture.debugElement.context.text).toEqual(tooltipText);
      });

      it('should not contain erroneous text', () => {
        expect(fixture.debugElement.context.text).not.toEqual(erroneousText);
      });
    });
  });
});
