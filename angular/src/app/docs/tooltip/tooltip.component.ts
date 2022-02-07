import { Component } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  scss = `
    $tooltip-bg: white;
    $tooltip-color: rgb(51, 51, 51);
    $tooltip-size: 6px;
    $tooltip-font-size: 12px;
    $tooltip-border-radius: 4px;
    $tooltip-border-color: rgb(221, 221, 221);
    $tooltip-border-width: 1px;
    $tooltip-delay: 1s;
    $tooltip-no-delay: 0.2s;
    $tooltip-padding: 10px;

    @mixin tooltip($size, $color, $background, $position, $offset: "") {
      transform-style: preserve-3d;
      transform: translateX(-50%);
      left: 50%;
      position: absolute;
      z-index: 1001;
      padding: $tooltip-padding;
      min-width: 150px;
      max-width: 200px;
      background-color: $background;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
      border-radius: $tooltip-border-radius;
      border: $tooltip-border-width solid $tooltip-border-color;
      color: $color;
      font-size: $tooltip-font-size !important; // Doesn't need to change - Global Style
      font-weight: 400;
      text-align: center;
      pointer-events: none;

      @if ($position==top) {
        bottom: calc(100% + 10px); // pushing down a little further so arrow is below content
      }

      @if ($position==bottom) {
        top: calc(100% + 10px); // pushing down a little further so arrow is below content
      }

      &::before,
      &::after {
        border: solid transparent;
        content: " ";
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;

        @if ($position==top) {
          top: 100%;
          left: 50%;
        }

        @if ($position==bottom) {
          bottom: 100%;
          left: 50%;
        }

        @if ($position==left) {
          left: 100%;
          top: 50%;
        }

        @if ($position==right) {
          right: 100%;
          top: 50%;
        }

        @if ($offset==left) {
          left: 25%;
        }
      }

      &::after {
        border-color: rgba(0, 0, 0, 0);
        border-width: $size;

        @if ($position==top) {
          margin-left: -$size;
          border-top-color: $background;
        }

        @if ($position==bottom) {
          margin-left: -$size;
          border-bottom-color: $background;
        }

        @if ($position==left) {
          margin-top: -$size;
          border-left-color: $background;
        }

        @if ($position==right) {
          margin-top: -$size;
          border-right-color: $background;
        }
      }

      &::before {
        border-color: rgba(0, 0, 0, 0);
        border-width: calc(#{$size} + 1px);

        @if ($position==top) {
          margin-left: calc(-#{$size} - 1px);
          border-top-color: $tooltip-border-color;
        }

        @if ($position==bottom) {
          margin-left: calc(-#{$size} - 1px);
          border-bottom-color: $tooltip-border-color;
        }

        @if ($position==left) {
          margin-top: calc(-#{$size} - 1px);
          border-left-color: $tooltip-border-color;
        }

        @if ($position==right) {
          margin-top: calc(-#{$size} - 1px);
          border-right-color: $tooltip-border-color;
        }
      }
    }

    [cmsTooltip] {
      position: relative;
      display: inline-block;
    }

    .tool-tip--top {
      @include tooltip($tooltip-size, $tooltip-color, $tooltip-bg, "top");
    }

    .tool-tip--bottom {
      @include tooltip($tooltip-size, $tooltip-color, $tooltip-bg, "bottom");
    }

    .tool-tip--offset-left-top {
      @include tooltip($tooltip-size, $tooltip-color, $tooltip-bg, "top", "left");

      transform: translateX(-25%);
    }

    .tool-tip--offset-left-bottom {
      @include tooltip($tooltip-size, $tooltip-color, $tooltip-bg, "bottom", "left");

      transform: translateX(-25%);
    }

    .tool-tip--body {
      position: fixed;
    }

    .tool-tip--top.tool-tip--body,
    .tool-tip--bottom.tool-tip--body {
      bottom: auto;
    }
  `;

  basicHtml = `
    <p
      cmsTooltip
      text="I am a tool tip"
    >
      Hover over me to see a tool tip!
    </p>
  `;

  dataBindingValue = 'I am bound!';
  dataBindingHtml = `
  <p
    cmsTooltip
    [text]="dataBindingToolTip"
  >
    Hover over me to see a tool tip!
  </p>
  `;

  positioningHtml = `
    <p
      cmsTooltip
      text="I am a tool tip offset"
      position="bottom"
    >
      Hover over me to see a tool tip <span class="tag">offset</span> left
    </p>
  `;

  offsetHtml = `
    <p
      cmsTooltip
      text="I am a tool tip offset"
      offset="left"
    >
      Hover over me to see a tool tip <span class="tag">offset</span> left
    </p>
  `;

  positioningAndOffsetHtml = `
    <p
      cmsTooltip
      text="I am a tool tip"
      position="bottom"
      offset="left"
    >
      Hover over me to see a tool tip <span class="tag">positioning</span> bottom and <span class="tag">offset</span> left
    </p>
  `;

  accessibilityHtml = `
    <p cmsTooltip text="I am a tool tip" tabindex="1">
      Use keyboard 'tab' to focus and 'Space/Enter' keys to open tooltip
    </p>
  `;
}
