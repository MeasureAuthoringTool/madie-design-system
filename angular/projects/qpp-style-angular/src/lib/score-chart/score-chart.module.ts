import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreChartDirective as ScoreChartDirective } from './score-chart.directive';
import { ScoreChartComponent as ScoreChartComponent } from './score-chart.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ScoreChartDirective,
    ScoreChartComponent
  ],
  exports: [ ScoreChartDirective ],
  entryComponents: [ ScoreChartComponent ]
})
export class CMSScoreChartModule {
  static forRoot() {
    return {
      ngModule: CMSScoreChartModule
    };
  }
}
