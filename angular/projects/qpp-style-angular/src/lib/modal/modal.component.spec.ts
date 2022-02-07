import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { ModalComponent } from './modal.component';
import { Component, ViewChild } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsService } from '../icons/icons.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { AngularMaterialModule } from '../angular-material.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { CMSButtonModule } from '../button/button.module';
import { CMSIconsModule } from '../icons/icons.module';

describe('ModalComponent', () => {
  let basicModalComponent: BasicModalComponent;
  let basicModalFixture: ComponentFixture<BasicModalComponent>;

  let primarySecondaryModalComponent: BasicPrimarySecondaryModalComponent;
  let primarySecondaryModalFixture: ComponentFixture<BasicPrimarySecondaryModalComponent>;

  let customFooterModalComponent: BasicCustomFooterModalComponent;
  let customFooterModalFixture: ComponentFixture<BasicCustomFooterModalComponent>;

  let noFooterModalComponent: NoFooterModalComponent;
  let noFooterModalFixture: ComponentFixture<NoFooterModalComponent>;

  let basicSidePanelModalComponent: BasicSidePanelModalComponent;
  let basicSidePanelModalFixture: ComponentFixture<BasicSidePanelModalComponent>;

  let customClassPanelModalComponent: CustomClassPanelModalComponent;
  let customClassPanelModalFixture: ComponentFixture<CustomClassPanelModalComponent>;

  let overlayContainer: OverlayContainer;
  let modalComponent: ModalComponent;

  let loader: HarnessLoader;

  beforeEach(
    waitForAsync(async () => {
      await TestBed.configureTestingModule({
        declarations: [
          ModalComponent,
          BasicModalComponent,
          BasicPrimarySecondaryModalComponent,
          BasicCustomFooterModalComponent,
          BasicSidePanelModalComponent,
          CustomClassPanelModalComponent,
          NoFooterModalComponent
        ],
        imports: [
          AngularMaterialModule,
          BrowserAnimationsModule,
          CMSButtonModule,
          CMSIconsModule,
          HttpClientTestingModule,
        ],
        providers: [IconsService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    overlayContainer = TestBed.inject(OverlayContainer);
  });

  afterEach(async () => {
    const dialogs = await loader.getAllHarnesses(MatDialogHarness);
    await Promise.all(dialogs.map(async (d) => await d.close()));

    overlayContainer.ngOnDestroy();
  });

  describe('Basic Modal', () => {
    beforeEach(() => {
      basicModalFixture = TestBed.createComponent(BasicModalComponent);
      basicModalComponent = basicModalFixture.componentInstance;

      basicModalFixture.detectChanges();
      loader = TestbedHarnessEnvironment.documentRootLoader(basicModalFixture);
      modalComponent = basicModalComponent.modalComponentRef;
    });

    it('should create', () => {
      expect(basicModalComponent).toBeTruthy();
    });

    it('should open modal if isOpen is set to true, should close modal if isOpen is set to false', async () => {
      // open modal
      basicModalComponent.isOpen = true;

      const dialog = await loader.getHarness(MatDialogHarness);
      expect(dialog).toBeTruthy();

      // close modal
      spyOn(modalComponent, 'closeDialog').and.callThrough();

      basicModalComponent.isOpen = false;
      basicModalFixture.detectChanges();

      expect(modalComponent.closeDialog).toHaveBeenCalledTimes(1);
      expect(modalComponent.dialogRef).toBeNull();
    });

    it('should have a close button with click event that would close the modal', fakeAsync(() => {
      basicModalComponent.isOpen = true;
      basicModalFixture.detectChanges();

      const closeBtn: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('button.closex');

      expect(closeBtn).toBeTruthy();

      spyOn(modalComponent, 'closeDialog').and.callThrough();

      closeBtn.click();
      tick(1000);

      expect(modalComponent.closeDialog).toHaveBeenCalledTimes(1);
      expect(modalComponent.dialogRef).toBeNull();
    }));

    it('should display default primary and secondary button text with default action to close modal', fakeAsync(() => {
      basicModalComponent.isOpen = true;
      basicModalFixture.detectChanges();

      const primaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('button[aria-label="Confirm"]');

      expect(primaryButton).toBeTruthy();

      const secondaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('button[aria-label="Cancel"]');

      expect(secondaryButton).toBeTruthy();

      spyOn(modalComponent, 'closeDialog');

      primaryButton.click();
      secondaryButton.click();

      tick();

      expect(modalComponent.closeDialog).toHaveBeenCalledTimes(2);
    }));

    it('Modal title should match input title', () => {
      basicModalComponent.isOpen = true;
      basicModalFixture.detectChanges();

      expect(basicModalComponent.title).toEqual(modalComponent.title);

      const titleElement = overlayContainer
        .getContainerElement()
        .querySelector('.qpp-c-modal__header > h3');

      expect(basicModalComponent.title).toEqual(titleElement.textContent);
    });

    it('Modal body should match the content inbetween cms-modal tag', () => {
      basicModalComponent.isOpen = true;
      basicModalFixture.detectChanges();

      const content = overlayContainer.getContainerElement().querySelector('p');

      expect(content).toBeTruthy();
      expect(content.textContent).toEqual(basicModalComponent.content);
    });

    it('set headerSeparator will add class("qpp-c-modal__header-sep") to the header', () => {
      modalComponent.headerSeparator = true;
      basicModalComponent.isOpen = true;
      basicModalFixture.detectChanges();

      const headerDiv = overlayContainer
        .getContainerElement()
        .querySelector('.qpp-c-modal__header');

      expect(headerDiv).toHaveClass('qpp-c-modal__header-sep');
    });
  });

  describe('Primary & Secondary Modal', () => {
    beforeEach(() => {
      primarySecondaryModalFixture = TestBed.createComponent(
        BasicPrimarySecondaryModalComponent
      );
      primarySecondaryModalComponent =
        primarySecondaryModalFixture.componentInstance;

      primarySecondaryModalFixture.detectChanges();
      loader = TestbedHarnessEnvironment.documentRootLoader(
        primarySecondaryModalFixture
      );

      modalComponent = primarySecondaryModalComponent.modalComponentRef;

      // open modal
      primarySecondaryModalComponent.isOpen = true;
      primarySecondaryModalFixture.detectChanges();
    });

    afterEach(async () => {
      primarySecondaryModalComponent.isOpen = false;
      primarySecondaryModalFixture.detectChanges();
    });

    it('should create', () => {
      expect(primarySecondaryModalComponent).toBeTruthy();
    });

    it('should display custom primary and secondary button text', () => {
      expect(primarySecondaryModalComponent.primary).toEqual(
        modalComponent.primary
      );
      expect(primarySecondaryModalComponent.secondary).toEqual(
        modalComponent.secondary
      );

      const primaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector(
          `button[aria-label="${primarySecondaryModalComponent.primary}"]`
        );

      expect(primaryButton).toBeTruthy();

      const secondaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector(
          `button[aria-label="${primarySecondaryModalComponent.secondary}"]`
        );

      expect(secondaryButton).toBeTruthy();
    });

    it('should click on primary & secondary button should trigger custom click event', fakeAsync(() => {
      spyOn(primarySecondaryModalComponent, 'onPrimaryBtnClicked');
      spyOn(primarySecondaryModalComponent, 'onSecondaryBtnClicked');

      const primaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector(
          `button[aria-label="${primarySecondaryModalComponent.primary}"]`
        );

      primaryButton.click();
      tick();

      expect(
        primarySecondaryModalComponent.onPrimaryBtnClicked
      ).toHaveBeenCalledTimes(1);

      const secondaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector(
          `button[aria-label="${primarySecondaryModalComponent.secondary}"]`
        );

      secondaryButton.click();
      tick();

      expect(
        primarySecondaryModalComponent.onSecondaryBtnClicked
      ).toHaveBeenCalledTimes(1);
    }));
  });

  describe('Custom Footer Modal', () => {
    beforeEach(() => {
      customFooterModalFixture = TestBed.createComponent(
        BasicCustomFooterModalComponent
      );
      customFooterModalComponent = customFooterModalFixture.componentInstance;

      customFooterModalFixture.detectChanges();
      loader = TestbedHarnessEnvironment.documentRootLoader(
        customFooterModalFixture
      );

      modalComponent = customFooterModalComponent.modalComponentRef;

      // open modal
      customFooterModalComponent.isOpen = true;
      customFooterModalFixture.detectChanges();
    });

    it('should create', () => {
      expect(customFooterModalComponent).toBeTruthy();
    });

    it('should display custom primary,secondary buttons with custom onclick event', fakeAsync(() => {
      spyOn(customFooterModalComponent, 'onCustomPrimaryBtnClicked');
      spyOn(customFooterModalComponent, 'onCustomSecondaryBtnClicked');

      const primaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('button.primary');

      expect(primaryButton).toBeTruthy();

      primaryButton.click();
      tick();

      expect(
        customFooterModalComponent.onCustomPrimaryBtnClicked
      ).toHaveBeenCalledTimes(1);

      const secondaryButton: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('button.secondary');

      expect(secondaryButton).toBeTruthy();

      secondaryButton.click();
      tick();

      expect(
        customFooterModalComponent.onCustomSecondaryBtnClicked
      ).toHaveBeenCalledTimes(1);
    }));
  });

  describe('No Footer Modal', () => {
    beforeEach(() => {
      noFooterModalFixture = TestBed.createComponent(
        NoFooterModalComponent
      );
      noFooterModalComponent = noFooterModalFixture.componentInstance;

      noFooterModalFixture.detectChanges();

      loader = TestbedHarnessEnvironment.documentRootLoader(
        noFooterModalFixture
      );

      modalComponent = noFooterModalComponent.modalComponentRef;

      // open modal
      noFooterModalComponent.isOpen = true;
      noFooterModalFixture.detectChanges();
    });

    it('should create and not display any footer', () => {
      expect(noFooterModalComponent).toBeTruthy();
    });

    it('Modal title should match input title', () => {
      const titleElement = overlayContainer
        .getContainerElement()
        .querySelector('.qpp-c-modal__header > h3');

      expect(noFooterModalComponent.title).toEqual(titleElement.textContent);
    });

    it('Modal body content should match input content', () => {
      const bodyElement = overlayContainer
        .getContainerElement()
        .querySelector('.qpp-c-modal__body');

      expect(noFooterModalComponent.content).toEqual(bodyElement.textContent);
    });

    it('Modal footer should not exist', () => {
      const footerElement = overlayContainer
        .getContainerElement()
        .querySelector('.qpp-c-modal__footer');

      expect(modalComponent.hideFooter).toBeTrue();
      expect(footerElement).toBeNull();
    });
  });

  describe('Side Panel Modal', () => {
    beforeEach(() => {
      basicSidePanelModalFixture = TestBed.createComponent(
        BasicSidePanelModalComponent
      );
      basicSidePanelModalComponent =
        basicSidePanelModalFixture.componentInstance;

      basicSidePanelModalFixture.detectChanges();
      loader = TestbedHarnessEnvironment.documentRootLoader(
        basicSidePanelModalFixture
      );
      modalComponent = basicSidePanelModalComponent.modalComponentRef;

      // open modal
      basicSidePanelModalComponent.isOpen = true;
      basicSidePanelModalFixture.detectChanges();
    });

    it('should create', () => {
      expect(basicSidePanelModalComponent).toBeTruthy();
    });

    it('Close button should be on the side panel instead of main panel', () => {
      // check side panel close button to be true
      const sidePanelCloseBtn: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('.modal-aside button.closex');

      expect(sidePanelCloseBtn).toBeTruthy();

      // check main panel close button to be false
      const mainPanelCloseBtn: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('.modal-main button.closex');

      expect(mainPanelCloseBtn).toBeFalsy();
    });

    it('should display content from side panel', () => {
      const sidePanelContent: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector('.modal-aside p');

      expect(sidePanelContent).toBeTruthy();
      expect(sidePanelContent.textContent).toEqual(
        basicSidePanelModalComponent.sidePanelContent
      );
    });
  });

  describe('Custom Class Panel Modal', () => {
    beforeEach(() => {
      customClassPanelModalFixture = TestBed.createComponent(
        CustomClassPanelModalComponent
      );
      customClassPanelModalComponent =
        customClassPanelModalFixture.componentInstance;

      customClassPanelModalFixture.detectChanges();
      loader = TestbedHarnessEnvironment.documentRootLoader(
        customClassPanelModalFixture
      );
      modalComponent = customClassPanelModalComponent.modalComponentRef;

      // open modal
      customClassPanelModalComponent.isOpen = true;
      customClassPanelModalFixture.detectChanges();
    });

    it('should create', () => {
      expect(customClassPanelModalComponent).toBeTruthy();
    });

    it('should have custom panel classes and backdrop classes', () => {
      const panelEle: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector(`.${modalComponent.panelClasses[0]}`);

      expect(panelEle).toBeTruthy();

      modalComponent.panelClasses.forEach((panelClass) => {
        expect(panelEle).toHaveClass(panelClass);
      });

      const backdropEle: HTMLElement = overlayContainer
        .getContainerElement()
        .querySelector(`.${modalComponent.backdropClasses[0]}`);

      expect(backdropEle).toBeTruthy();

      modalComponent.backdropClasses.forEach((backdropClass) => {
        expect(backdropEle).toHaveClass(backdropClass);
      });
    });
  });
});

@Component({
  template: `
    <cms-modal #basic [title]="title" [(isOpen)]="isOpen">
      <p>{{ content }}</p>
    </cms-modal>
  `,
})
class BasicModalComponent {
  @ViewChild('basic') modalComponentRef: ModalComponent;

  isOpen = false;
  title = 'Basic';
  content = `I'm CMS Modal`;
}

@Component({
  template: `
    <cms-modal
      #primarySecondary
      [title]="title"
      [(isOpen)]="isOpen"
      [primary]="primary"
      [secondary]="secondary"
      (primaryBtnClicked)="onPrimaryBtnClicked()"
      (secondaryBtnClicked)="onSecondaryBtnClicked()"
    >
      <p>{{ content }}</p>
    </cms-modal>
  `,
})
class BasicPrimarySecondaryModalComponent {
  @ViewChild('primarySecondary') modalComponentRef: ModalComponent;

  isOpen = false;
  title = 'Basic';
  content = `I'm CMS Modal`;

  primary = 'Primary Button';
  secondary = 'Secondary Button';

  onPrimaryBtnClicked(): void {}
  onSecondaryBtnClicked(): void {}
}

@Component({
  template: `
    <cms-modal
      #modalCustomFooter
      [title]="title"
      [(isOpen)]="isOpen"
      [footer]="customFooter"
    >
      <p>{{ content }}</p>
    </cms-modal>

    <ng-template #customFooter>
      <button cms-button class="primary" (click)="onCustomPrimaryBtnClicked()">
        {{ primary }}
      </button>
      <button
        cms-button
        class="secondary"
        (click)="onCustomSecondaryBtnClicked()"
      >
        {{ secondary }}
      </button>
    </ng-template>
  `,
})
class BasicCustomFooterModalComponent {
  @ViewChild('modalCustomFooter') modalComponentRef: ModalComponent;

  isOpen = false;
  title = 'Basic';
  content = `I'm CMS Modal`;

  primary = 'Custom Primary';
  secondary = 'Custom Secondary';

  onCustomPrimaryBtnClicked(): void {}
  onCustomSecondaryBtnClicked(): void {}
}

@Component({
  template: `
    <cms-modal
      #modalNoFooter
      [title]="title"
      [(isOpen)]="isOpen"
      [hideFooter]="true"
    >
      <p>{{ content }}</p>
    </cms-modal>
  `,
})
class NoFooterModalComponent {
  @ViewChild('modalNoFooter') modalComponentRef: ModalComponent;

  isOpen = false;
  title = 'Basic';
  content = `I'm CMS Modal`;
}


@Component({
  template: `
    <cms-modal
      #sidePanel
      [title]="title"
      [(isOpen)]="isOpen"
      [sidePanel]="customSidePanel"
    >
      <p>{{ content }}</p>
    </cms-modal>

    <ng-template #customSidePanel>
      <p>{{ sidePanelContent }}</p>
    </ng-template>
  `,
})
class BasicSidePanelModalComponent {
  @ViewChild('sidePanel') modalComponentRef: ModalComponent;

  isOpen = false;
  title = 'Side Panel';
  sidePanelContent = 'I am a side panel';
}

@Component({
  template: `
    <cms-modal
      #customClassPanel
      [title]="title"
      [(isOpen)]="isOpen"
      [panelClasses]="panelClasses"
      [backdropClasses]="backdropClasses"
    >
      <p>{{ content }}</p>
    </cms-modal>
  `,
})
class CustomClassPanelModalComponent {
  @ViewChild('customClassPanel') modalComponentRef: ModalComponent;

  isOpen = false;
  title = 'Custom Class Panel';
  panelClasses = ['panelClass', 'panelClass1', 'panelClass2'];
  backdropClasses = ['backdropClass', 'backdropClass1', 'backdropClass2'];
}
