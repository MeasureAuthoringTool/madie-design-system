import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { ButtonSize, ButtonType, ButtonVariant } from './models/button.model';
import { Component, Input } from '@angular/core';
import { CMSButtonModule } from './button.module';

@Component({
  template: `
    <button cms-button [type]="type" [size]="size" [variant]="variant" #testButton></button>
    <a cms-button [type]="type" [size]="size" [variant]="variant" #testAnchor></a>
  `
})
class TestHostComponent {
  @Input() type;
  @Input() size;
  @Input() variant;
}

describe('ButtonComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CMSButtonModule],
      declarations: [ TestHostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('regular button', () => {
    it('should set the default qpp-c-button button class', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement.querySelector('button.qpp-c-button');
      expect(element).toBeTruthy();
    });

    it('should set the expected button classes when type is provided', () => {
      component.type = ButtonType.Text;
      fixture.detectChanges();

      const element = fixture.debugElement.nativeElement.querySelector('button.qpp-c-button.qpp-c-button--text');
      expect(element).toBeTruthy();
    });

    it('should set the size button classes when it is provided', () => {
      component.size = ButtonSize.Big;
      fixture.detectChanges();

      const element = fixture.debugElement.nativeElement.querySelector('button.qpp-c-button.qpp-c-button--big');
      expect(element).toBeTruthy();
    });

    it('should set the variant button classes when it is provided', () => {
      component.variant = ButtonVariant.Danger;
      fixture.detectChanges();

      const element = fixture.debugElement.nativeElement.querySelector('button.qpp-c-button.qpp-c-button--danger');
      expect(element).toBeTruthy();
    });

    it('should remove existing variant class', () => {
      component.variant = ButtonVariant.Outline;
      fixture.detectChanges();

      let element = fixture.debugElement.nativeElement.querySelector('button.qpp-c-button.qpp-c-button--outline');
      expect(element).toBeTruthy();

      component.variant = null;
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement.querySelector('button.qpp-c-button.qpp-c-button--outline');
      expect(element).toBeNull();
    });
  });

  describe('anchor button', () => {
    it('should set the default qpp-c-button button class for the anchor tag', () => {
      fixture.detectChanges();
      const element = fixture.debugElement.nativeElement.querySelector('a.qpp-c-button');
      expect(element).toBeTruthy();
    });

    it('should set the expected button classes when type is provided', () => {
      component.type = ButtonType.Text;
      fixture.detectChanges();

      const element = fixture.debugElement.nativeElement.querySelector('a.qpp-c-button.qpp-c-button--text');
      expect(element).toBeTruthy();
    });

    it('should set the size button classes when it is provided', () => {
      component.size = ButtonSize.Big;
      fixture.detectChanges();

      const element = fixture.debugElement.nativeElement.querySelector('a.qpp-c-button.qpp-c-button--big');
      expect(element).toBeTruthy();
    });

    it('should set the variant button classes when it is provided', () => {
      component.variant = ButtonVariant.Danger;
      fixture.detectChanges();

      const element = fixture.debugElement.nativeElement.querySelector('a.qpp-c-button.qpp-c-button--danger');
      expect(element).toBeTruthy();
    });

    it('should remove existing variant class', () => {
      component.variant = ButtonVariant.Outline;
      fixture.detectChanges();

      let element = fixture.debugElement.nativeElement.querySelector('a.qpp-c-button.qpp-c-button--outline');
      expect(element).toBeTruthy();

      component.variant = null;
      fixture.detectChanges();
      element = fixture.debugElement.nativeElement.querySelector('a.qpp-c-button.qpp-c-button--outline');
      expect(element).toBeNull();
    });
  });
});
