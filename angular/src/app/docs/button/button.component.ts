import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonSize, ButtonType, ButtonVariant, Icons } from 'projects/qpp-style-angular/src/public_api';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  scss = `
    @import 'qppds.scss'; // from qpp-style
  `;

  counter = 0;
  variant = ButtonVariant;
  type = ButtonType;
  size = ButtonSize;
  icon = Icons;

  basicHtml = `
    <div class='set-row'>
      <button cms-button>
          Basic
      </button>
      <button cms-button [variant]='variant.Secondary'>
          Basic
      </button>
      <div class='example-bg-black'>
          <button cms-button [variant]='variant.Outline'>
              Basic
          </button>
      </div>
      <button cms-button [variant]='variant.Danger'>
          Basic
      </button>
      <button cms-button [variant]='variant.White'>
          Basic
      </button>
      <button cms-button [size]='size.Big'>
          Big Button
      </button>
    </div>
  `;

  basicScss = `
    .example-bg-black {
      background-color: #000;
    }

    .button-text-italic {
      font-style: italic;
    }
  `;

  basicTs = `
    import { ButtonVariant, ButtonType, ButtonSize } from 'qpp-style-angular';

    export class ExampleComponent {
      variant = ButtonVariant;
      type = ButtonType;
      size = ButtonSize;
    }
  `;

  basicHrefHtml = `
    <a cms-button href='https://www.cms.gov/'>
        Basic Button with Href
    </a>
  `;

  basicDisabledHtml = `
    <button cms-button [disabled]='true'>
        Basic Button Disabled
    </button>
  `;

  basicAdditionalClassesHtml = `
     <button cms-button class="button-text-italic">
          Additional Button Classes
      </button>
  `;

  basicAdditionalClassesTs = `
    @Component({
      selector: 'app-example',
      templateUrl: './example.component.html',
      styleUrls: ['./example.component.scss'],
      encapsulation: ViewEncapsulation.None
    })
    export class ExampleComponent {}
  `;

  basicWithClickEventHtml = `
    <div class='set-row'>
        <button cms-button (click)='handleTextButton()'>
            Basic Button With Event
        </button>

        Counter: {{ counter }}
    </div>
  `;

  basicWithClickEventTs = `
  import { ButtonVariant, ButtonType, ButtonSize } from 'qpp-style-angular';

  @Component({
    selector: 'app-example',
    templateUrl: './example.component.html',
    styleUrls: ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
  export class ExampleComponent {
    variant = ButtonVariant;
    type = ButtonType;
    size = ButtonSize;

    counter = 0;

    onLinkButtonClick(): void {
    this.counter++;
  }
  `;

  secondaryWithLeftIconHtml = `
     <button
              cms-button
              [variant]='variant.Secondary'
      >
          <cms-icon [svg]="icon.Print"></cms-icon>
          Secondary With Left Icon
      </button>
  `;

  outlineWithRightIconHtml = `
     <div class='outline-button-example'>
          <button
                  cms-button
                  [variant]='variant.Outline'
          >
              <cms-icon [svg]="icon.Print"></cms-icon>
              Outline Button With Right Icon
          </button>
      </div>
  `;

  textHtml = `
    <div class='set-row'>
          <button cms-button [type]='type.Text'>
              Text Button
          </button>
          <button cms-button [type]='type.Text' [variant]='variant.Danger'>
              Text Button
          </button>
          <div class='example-bg-black'>
              <button cms-button [type]='type.Text' [variant]='variant.White'>
                  Text Button
              </button>
          </div>
      </div>
  `;

  textScss = `
    .example-bg-black {
      background-color: #000;
    }
  `;

  textHrefHtml = `
    <a cms-button [type]='type.Text' href='https://www.cms.gov/'>
        Text Button with Href
    </a>
  `;

  textDisabledHtml = `
    <button cms-button [type]='type.Text' [disabled]='true'>
        Text Button Disabled
    </button>
  `;

  textWithClickEventHtml = `
    <div class='set-row'>
        <button cms-button [type]='type.Text' (click)='handleTextButton()'>
            Text Button with Click event
        </button>

        Counter: {{ counter }}
    </div>
  `;

  textWithClickEventTs = `
    counter = 0;

    onLinkButtonClick(): void {
      this.counter++;
    }
  `;

  handleTextButton(): void {
    this.counter++;
  }
}
