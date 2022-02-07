import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { ScoreChartData } from 'projects/qpp-style-angular/src/public_api';

@Component({
  selector: 'app-score-chart',
  templateUrl: './score-chart.component.html',
  styleUrls: ['./score-chart.component.scss']
})
export class ScoreChartComponent implements AfterContentChecked {
  scss = `
    .cms-common-score-chart__full {
      position: relative;

      .cms-common-score-chart__item {
        position: absolute;
        animation: expandFromLeft;
        box-sizing: border-box;

        + .cms-common-score-chart__item {
          border-left-style: solid;
        }

        &:first-child {
          border-bottom-right-radius: 0 !important;
          border-top-right-radius: 0 !important;
        }

        &.cumulative-item-sum-equals-total {
          border-bottom-left-radius: 0 !important;
          border-top-left-radius: 0 !important;
        }
      }

      @keyframes expandFromLeft {
        from {
          width: 0;
          left: 0;
        }
      }
    }
  `;

  basicHtml = `
    <div cmsScoreChart [data]="scoreChartData"></div>
  `;
  basicCode = `
    scoreChartData: ScoreChartData;

    ngAfterContentChecked(): void {
      this.scoreChartData = {
        total: 100,
        items: [{
          value: 25,
          color: '#2284d3'
        }, {
          value: 15,
          color: '#ffa202'
        }, {
          value: 40,
          color: '#ea5f92'
        }]
      };
    }
  `;

  withOptionsCode = `
    scoreChartData: ScoreChartData;

    ngAfterContentChecked(): void {
      this.scoreChartData = {
        total: 100,
        items: [{
          value: 25,
          color: '#2284d3'
        }, {
          value: 15,
          color: '#ffa202'
        }, {
          value: 40,
          color: '#ea5f92'
        }]
      };
    }
  `;
  withOptionsHtml = `
    <div cmsScoreChart [data]="scoreChartData"
      width="700"
      height="20"
      borderRadius="10"
      backgroundColor="grey"
      animationSpeed="3000"
      itemSeparatorWidth="5"
    ></div>
  `;

  scoreChartData: ScoreChartData;

  ngAfterContentChecked(): void {
    // To avoid redrawing the score chart on every change detection cycle
    if (this.scoreChartData) {
      return;
    }
    this.scoreChartData = {
      total: 100,
      items: [
        {
          value: 25,
          color: '#2284d3',
        },
        {
          value: 15,
          color: '#ffa202',
        },
        {
          value: 40,
          color: '#ea5f92',
        },
      ],
    };
  }
}
