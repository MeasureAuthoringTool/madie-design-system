import {
  Directive,
  Input,
  ComponentRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  OnChanges,
} from '@angular/core';
import { ScoreChartData } from './models/score-chart.model';
import { ScoreChartComponent } from './score-chart.component';

@Directive({
  selector: '[cmsScoreChart]',
})
export class ScoreChartDirective implements OnChanges {
  @Input() data: ScoreChartData;
  @Input() width: number;
  @Input() height: number;
  @Input() borderRadius: number;
  @Input() backgroundColor: string;
  @Input() animationSpeed: number;
  @Input() itemSeparatorWidth: number;

  componentRef: ComponentRef<ScoreChartComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {}

  ngOnChanges(): void {
    this.createProgressbar();
  }

  private createProgressbar(): void {
    this.viewContainerRef.clear();
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(ScoreChartComponent);

    this.componentRef = this.viewContainerRef.createComponent(componentFactory);

    // set component inputs
    this.componentRef.instance.width = this.width;
    this.componentRef.instance.height = this.height;
    this.componentRef.instance.borderRadius = this.borderRadius;
    this.componentRef.instance.backgroundColor = this.backgroundColor;
    this.componentRef.instance.animationSpeed = this.animationSpeed;
    this.componentRef.instance.itemSeparatorWidth = this.itemSeparatorWidth;
    this.componentRef.instance.data = this.data;

    // OnPush does not see these changes, so we need to force
    this.componentRef.changeDetectorRef.markForCheck();
    this.componentRef.changeDetectorRef.detectChanges();
  }
}
