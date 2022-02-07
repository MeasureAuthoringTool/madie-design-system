export interface ScoreChartData {
  total: number;
  items: ScoreChartItem[];
}

export interface ScoreChartItem {
  color: string;
  value: number;
}

export interface ScoreChartTemplate {
  widthPixels?: number;
  widthPercent?: number;
  height: number;
  borderRadius: number;
  backgroundColor: string;
  animationSpeed: number;
  itemSeparatorWidth: number;
  items: ScoreChartTemplateItem[];
}

export interface ScoreChartTemplateItem {
  width: number;
  color: string;
  cumulativeItemSumEqualsTotal: boolean;
  hasLeftBorderRadius: boolean;
  hasRightBorderRadius: boolean;
}
