import {
  Directive,
  OnDestroy,
  Input,
  ElementRef,
  HostListener,
  Renderer2,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Inject,
  OnInit,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { WINDOW } from '../tokens/window.token';
import { LiveAnnouncer } from '@angular/cdk/a11y';

// KeyCode for keyboard keys
enum KEYS {
  SPACE = 32,
  ENTER = 13,
}

@Directive({
  selector: '[cmsTooltip]',
})
export class TooltipDirective implements OnDestroy, OnInit {
  @Input() text: string;
  @Input() body: boolean;
  @Input() position: string;
  @Input() tooltipHeight = 40;
  @Input() disable = false;
  @Input() offset: string;

  tooltip: any;
  componentRef: ComponentRef<TooltipComponent>;
  isDisplay = false;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(WINDOW) private window: any,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private liveAnnouncer: LiveAnnouncer
  ) {}

  @HostListener('mouseenter') onMouseEnter(): void {
    this.createTooltip();
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.removeTooltip();
  }

  @HostListener('keyup', ['$event'])
  handleKeyUp(event: KeyboardEvent) {
    // IE has different properties and value so use keycode instead
    // Since keyCode is deprecated, so added 'code' for Chrome
    if (
      (!!event.code && (event.code === 'Space' || event.code === 'Enter')) ||
      event.keyCode === KEYS.ENTER ||
      event.keyCode === KEYS.SPACE
    ) {
      if (this.isDisplay) {
        this.removeTooltip();
      } else {
        this.createTooltip();
      }
    }
  }

  ngOnInit(): void {
    // add attribute role=application to the host element for JAWS to pick up key press event
    // without it, the keyboard event will not fire in IE when JAWS is turn on
    this.renderer.setAttribute(this.el.nativeElement, 'role', 'application');
  }

  ngOnDestroy(): void {
    this.removeTooltip();
  }

  private removeTooltip(): void {
    if (this.isDisplay) {
      this.appRef.detachView(this.componentRef.hostView);
      this.componentRef.destroy();
      this.isDisplay = false;
    }
  }

  private createTooltip(): void {
    if (!this.disable && this.text && !this.isDisplay) {
      this.componentRef = this.componentFactoryResolver
        .resolveComponentFactory(TooltipComponent)
        .create(this.injector);

      // set component inputs
      this.componentRef.instance.body = this.body;
      this.componentRef.instance.position = this.position;
      this.componentRef.instance.text = this.text;
      this.componentRef.instance.offset = this.offset;

      // OnPush does not see these changes, so we need to force
      this.componentRef.changeDetectorRef.markForCheck();
      this.componentRef.changeDetectorRef.detectChanges();

      this.appRef.attachView(this.componentRef.hostView);

      const ele = (this.componentRef.hostView as EmbeddedViewRef<any>)
        .rootNodes[0] as HTMLElement;

      if (this.body) {
        this.window.document.body.appendChild(ele);
        this.tooltip = this.window.document.body.querySelector('.tool-tip');
        this.setTooltipPosition();
      } else {
        this.el.nativeElement.appendChild(ele);
        this.tooltip = this.el.nativeElement.querySelector('.tool-tip');
      }

      this.isDisplay = true;
      this.liveAnnouncer.announce(this.text);
    }
  }

  private setTooltipPosition(): void {
    let eleRect: any;
    if (this.el.nativeElement.tagName === 'BUTTON') {
      eleRect = this.el.nativeElement.children[0].getBoundingClientRect();
    } else {
      eleRect = this.el.nativeElement.getBoundingClientRect();
    }

    const tooltipRect = this.tooltip.getBoundingClientRect();

    switch (this.position) {
      case 'top':
        this.setPositionTop(eleRect, tooltipRect);
        break;
      case 'bottom':
        this.setPositionBottom(eleRect, tooltipRect);
        break;

      default:
        this.setPositionTop(eleRect, tooltipRect);
    }
  }

  private setPositionTop(eleRect: any, tooltipRect: any): void {
    if (tooltipRect.height > this.tooltipHeight) {
      const offset = eleRect.top - (tooltipRect.height - this.tooltipHeight);
      this.renderer.setStyle(
        this.tooltip,
        'top',
        offset - eleRect.height * 2 + 'px'
      );
    } else {
      this.renderer.setStyle(
        this.tooltip,
        'top',
        eleRect.top - eleRect.height * 2 + 'px'
      );
    }
    this.renderer.setStyle(
      this.tooltip,
      'left',
      eleRect.width / 2 + eleRect.left + 'px'
    );
  }

  private setPositionBottom(eleRect: any, tooltipRect: any): void {
    if (tooltipRect.height > this.tooltipHeight) {
      const offset = eleRect.bottom + (tooltipRect.height - this.tooltipHeight);
      this.renderer.setStyle(
        this.tooltip,
        'top',
        offset - eleRect.height * 2 + (eleRect.height + 10) + 'px'
      );
    } else {
      this.renderer.setStyle(
        this.tooltip,
        'top',
        eleRect.bottom - eleRect.height * 2 + (eleRect.height + 10) + 'px'
      );
    }
    this.renderer.setStyle(
      this.tooltip,
      'left',
      eleRect.width / 2 + eleRect.left + 'px'
    );
  }
}
