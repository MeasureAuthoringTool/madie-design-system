import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
})
export class ModalComponent {
  isBasicOpen = false;
  isCustomFooterOpen = false;
  isNoFooterOpen = false;
  isPrimarySecondaryOpen = false;
  isOutputEventOpen = false;
  isBasicSidePanelOpen = false;
  isCustomClassPanelOpen = false;

  customPanelClasses = ['custom-class-modal-panel'];
  customBackDropClasses = ['custom-class-modal-backdrop'];

  scss = `
    @import '~@angular/material/prebuilt-themes/indigo-pink.css';
    @import '~qpp-style/styles/qppds/components/modal';
  `;

  basicHtml = `
    <cms-modal title="Basic" [(isOpen)]="isOpen"> I'm CMS Modal </cms-modal>
  `;

  basicWithCustomPrimarySecondaryBtnHtml = `
    <cms-modal
      title="Basic"
      primary="Yes, I am Primary"
      secondary="No, I am Secondary"
      [(isOpen)]="isPrimarySecondaryOpen"
      (primaryBtnClicked)="onPrimaryBtnClicked()"
      (secondaryBtnClicked)="onSecondaryBtnClicked()"
    >
      I'm CMS Modal
    </cms-modal>
  `;

  basicOutputEventHtml = `
    <cms-modal
      title="Basic"
      [(isOpen)]="isOutputEvent"
      (afterOpened)="alert('onAfterOpened')"
      (beforeClosed)="alert('onBeforeClosed')"
      (afterClosed)="alert('onAfterClosed')"
    >
      I'm CMS Modal
    </cms-modal>
  `;

  basicCustomFooterHtml = `
    <cms-modal
      title="Custom Footer"
      [(isOpen)]="isCustomFooterOpen"
      [footer]="customFooter"
    >
      <p>I'm CMS Modal</p>
    </cms-modal>

    <ng-template #customFooter>
      <button
        (click)="alert('custom secondary')"
        style="margin-right: 10px; background-color: lightgreen"
      >
        custom secondary
      </button>
      <button
        (click)="alert('custom primary')"
        style="background-color: lightcoral"
      >
        custom primary
      </button>
    </ng-template>
  `;

  noFooterHtml = `
    <cms-modal
      title="No Footer"
      [(isOpen)]="isNoFooterOpen"
      [hideFooter]='true'
    >
      <p>I'm CMS Modal</p>
    </cms-modal>
  `;

  basicSidePanelHtml = `
    <cms-modal
      title="Side Panel"
      [(isOpen)]="isBasicSidePanelOpen"
      [sidePanel]="customSidePanel"
    >
      <p>I'm CMS Modal</p>
    </cms-modal>

    <ng-template #customSidePanel>
      <p>I'm a side panel</p>
    </ng-template>
  `;

  CustomClassPanelHtml = `
    <button (click)="onShowCustomClassPanelModal()">Modal</button>
    <cms-modal
      title="Custom Class"
      [(isOpen)]="isCustomClassPanelOpen"
      [panelClasses]="customPanelClasses"
      [backdropClasses]="customBackDropClasses"
    >
      <p>I'm a Custom Class CMS Modal</p>
    </cms-modal>
  `;

  onShowBasicModal(): void {
    this.isBasicOpen = !this.isBasicOpen;
  }

  onCustomFooterModal(): void {
    this.isCustomFooterOpen = !this.isCustomFooterOpen;
  }

  onNoFooterModal(): void {
    this.isNoFooterOpen = !this.isNoFooterOpen;
  }

  onShowPrimarySecondaryBtnModal(): void {
    this.isPrimarySecondaryOpen = !this.isPrimarySecondaryOpen;
  }

  onShowBasicSidePanelModal(): void {
    this.isBasicSidePanelOpen = !this.isBasicSidePanelOpen;
  }

  onOutputEventModal(): void {
    this.isOutputEventOpen = !this.isOutputEventOpen;
  }

  onShowCustomClassPanelModal(): void {
    this.isCustomClassPanelOpen = !this.isCustomClassPanelOpen;
  }

  alert(message: string): void {
    alert(message);
  }
}
