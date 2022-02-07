import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ScoreChartData, ScoreChartTemplateItem, ScoreChartTemplate } from './models/score-chart.model';

@Component({
  selector: 'cms-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreChartComponent {
  @Input()
  set data(data: ScoreChartData) {
    if (data !== this._data) {
      this._data = data;
      this.buildTemplateModelData();
    }
  }
  @Input()
  set width(width: number) {
    if (width !== this._width) {
      this._width = width;
      this.buildTemplateModelData();
    }
  }
  @Input()
  set height(height: number) {
    if (height !== this._height) {
      this._height = height;
      this.buildTemplateModelData();
    }
  }
  @Input()
  set borderRadius(borderRadius: number) {
    if (borderRadius !== this._borderRadius) {
      this._borderRadius = borderRadius;
      this.buildTemplateModelData();
    }
  }
  @Input()
  set backgroundColor(backgroundColor: string) {
    if (backgroundColor !== this._backgroundColor) {
      this._backgroundColor = backgroundColor;
      this.buildTemplateModelData();
    }
  }
  @Input()
  set animationSpeed(animationSpeed: number) {
    if (animationSpeed !== this._animationSpeed) {
      this._animationSpeed = animationSpeed;
      this.buildTemplateModelData();
    }
  }
  @Input()
  set itemSeparatorWidth(itemSeparatorWidth: number) {
    if (itemSeparatorWidth !== this._itemSeparatorWidth) {
      this._itemSeparatorWidth = itemSeparatorWidth;
      this.buildTemplateModelData();
    }
  }

  templateData: ScoreChartTemplate;

  _data: ScoreChartData;
  _width: number;
  _height: number;
  _borderRadius: number;
  _backgroundColor: string;
  _animationSpeed: number;
  _itemSeparatorWidth: number;

  private readonly DEFAULT_HEIGHT = 5;
  private readonly DEFAULT_BORDER_RADIUS = 2.5;
  private readonly DEFAULT_BACKGROUND_COLOR = '#ececec';
  private readonly DEFAULT_ANIMATION_SPEED = 1500;
  private readonly DEFAULT_ITEM_SEPARATOR_WIDTH = 1;

  buildTemplateModelData(): void {
    const templateData: ScoreChartTemplate = {
      height: this._height || this.DEFAULT_HEIGHT,
      borderRadius: this._borderRadius === 0 ? 0 : this._borderRadius || this.DEFAULT_BORDER_RADIUS,
      backgroundColor: this._backgroundColor || this.DEFAULT_BACKGROUND_COLOR,
      animationSpeed: this._animationSpeed === 0 ? 0 : this._animationSpeed || this.DEFAULT_ANIMATION_SPEED,
      itemSeparatorWidth:
        this._itemSeparatorWidth === 0 ? 0 : this._itemSeparatorWidth || this.DEFAULT_ITEM_SEPARATOR_WIDTH,
      items: this.buildScoreChartTemplateItems(),
    };

    if (this._width) {
      templateData.widthPixels = this._width;
    } else {
      templateData.widthPercent = 100;
    }
    this.templateData = templateData;
  }

  /**
   * Calculates the width percentage of the item
   * @param itemValue value of the item
   * @param totalValue total value expressed by the chart
   */
  private getRelativeWidth(itemValue: number, totalValue: number): number {
    return (itemValue / totalValue) * 100;
  }

  private buildScoreChartTemplateItems(): ScoreChartTemplateItem[] {
    if (!this._data || !this._data.items || !this._data.items.length) {
      return;
    }
    // Calculate the actual items total in order to determine if the sum goes beyond the total,
    // to adjust for the bar running off the side of the chart
    const itemsTotal = this._data.items.reduce((acc, item) => acc + item.value, 0);
    const total = itemsTotal > this._data.total ? itemsTotal : this._data.total;
    return this._data.items.reduce(
      (acc, item, i) => {
        const newCumulativeValueSum = acc.cumulativeValueSum + item.value;
        const cumulativeItemSumEqualsTotal = newCumulativeValueSum >= total;
        const newTemplateItem: ScoreChartTemplateItem = {
          color: item.color,
          width: this.getRelativeWidth(item.value, total),
          cumulativeItemSumEqualsTotal: cumulativeItemSumEqualsTotal,
          hasLeftBorderRadius: i === 0,
          hasRightBorderRadius: cumulativeItemSumEqualsTotal
        };
        return { cumulativeValueSum: newCumulativeValueSum, templateItems: [...acc.templateItems, newTemplateItem] };
      },
      {
        cumulativeValueSum: 0,
        templateItems: [],
      },
    ).templateItems;
  }
}
