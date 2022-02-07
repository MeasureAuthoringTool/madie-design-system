import { ChangeDetectionStrategy, Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { ButtonSize, ButtonType, ButtonVariant } from './models/button.model';

@Component({
  selector: 'button[cms-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {

  private readonly BUTTON_CLASS_BASE = 'qpp-c-button';
  private readonly _buttonTypeClasses = Object.values(ButtonType).map(t => `${this.BUTTON_CLASS_BASE}--${t}`);
  private readonly _buttonVariantClasses = Object.values(ButtonVariant).map(v => `${this.BUTTON_CLASS_BASE}--${v}`);
  private readonly _buttonSizeClasses = Object.values(ButtonSize).map(s => `${this.BUTTON_CLASS_BASE}--${s}`);

  @Input()
  set type(type: ButtonType) {
    this.applyClassChanges(type, this._buttonTypeClasses);
  }

  @Input()
  set size(size: ButtonSize) {
    this.applyClassChanges(size, this._buttonSizeClasses);
  }

  @Input()
  set variant(variant: ButtonVariant) {
    this.applyClassChanges(variant, this._buttonVariantClasses);

  }

  get hostElement(): HTMLElement {
    return this._elementRef.nativeElement;
  }

  constructor(private _elementRef: ElementRef) {
    this.hostElement.classList.add(this.BUTTON_CLASS_BASE);
  }

  applyClassChanges(classModifier: string, classesToRemove: string[] = []): void {
    const newClass = `${this.BUTTON_CLASS_BASE}--${classModifier}`;
    if (!classModifier || !this.hostElement.classList.contains(newClass)) {
      // remove any type class from the btnClass in the beginning
      this.hostElement.classList.remove(...classesToRemove);
    }

    if (!!classModifier && !this.hostElement.classList.contains(newClass)) {
      // Both Link and Text will use the same qpp style class
      this.hostElement.classList.add(newClass);
    }
  }
}

@Component({
  selector: 'a[cms-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnchorComponent extends ButtonComponent {}
