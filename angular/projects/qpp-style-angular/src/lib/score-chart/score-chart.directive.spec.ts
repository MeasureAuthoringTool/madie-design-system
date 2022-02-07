import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ScoreChartDirective } from './score-chart.directive';
import { ScoreChartData } from './models/score-chart.model';
import { CMSScoreChartModule } from './score-chart.module';

@Component({
  template: `
    <div cmsScoreChart
      [data]="data"
      [width]="width"
      [height]="height"
      [borderRadius]="borderRadius"
      [backgroundColor]="backgroundColor"
      [animationSpeed]="animationSpeed"
      [itemSeparatorWidth]="itemSeparatorWidth"
    >
    </div>
  `
})
class TestHostComponent {
  data: ScoreChartData = {
    total: 100,
    items: [{
      value: 10,
      color: 'blue'
    }]
  };

  width = 100;
  height = 20;
  borderRadius = 11;
  leftBorderRadius = 5;
  rightBorderRadius = 5;
  backgroundColor = 'green';
  animationSpeed = 5;
  itemSeparatorWidth = 3;

  constructor() {}
}

describe('ScoreChartDirective', (): void => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  let directiveDebugElement: DebugElement;
  let directiveInstance: ScoreChartDirective;

  function createComponent(): void {
    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    directiveDebugElement = fixture.debugElement.query(By.directive(ScoreChartDirective));
    directiveInstance = directiveDebugElement.injector.get(ScoreChartDirective);
  }

  beforeEach(async( (): void => {
    TestBed.configureTestingModule({
      imports: [CMSScoreChartModule],
      declarations: [TestHostComponent],
    }).compileComponents();

    createComponent();
  }));

  it('should create directive', (): void => {
    expect(directiveInstance).toBeDefined();
  });

  describe('create ScoreChart component', (): void => {
    it('should create and accurately set data for its componentRef instance', (): void => {
      fixture.detectChanges();
      const componentRef = directiveInstance.componentRef.instance;
      expect(componentRef).toBeDefined();
      expect(componentRef._data).toEqual(hostComponent.data);
      expect(componentRef._width).toEqual(hostComponent.width);
      expect(componentRef._height).toEqual(hostComponent.height);
      expect(componentRef._borderRadius).toEqual(hostComponent.borderRadius);
      expect(componentRef._backgroundColor).toEqual(hostComponent.backgroundColor);
      expect(componentRef._animationSpeed).toEqual(hostComponent.animationSpeed);
      expect(componentRef._itemSeparatorWidth).toEqual(hostComponent.itemSeparatorWidth);
    });
  });
});
