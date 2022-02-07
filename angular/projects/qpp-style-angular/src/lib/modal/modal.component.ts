import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ButtonType, ButtonVariant } from '../button/models/button.model';
import { Icons } from '../icons/icons.model';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'cms-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnChanges, OnDestroy {
  @ViewChild(TemplateRef) dialogTemplate: TemplateRef<any>;
  dialogRef: MatDialogRef<any, MatDialogConfig> = null;

  @Input() isOpen!: boolean;
  @Input() title = '';
  @Input() primary = 'Confirm';
  @Input() secondary = 'Cancel';
  @Input() footer?: TemplateRef<any>;
  @Input() sidePanel?: TemplateRef<any>;
  @Input() headerSeparator = false;
  @Input() panelClasses: string[] = [];
  @Input() backdropClasses: string[] = [];
  @Input() hideFooter = false;

  @Output() isOpenChange = new EventEmitter<boolean>();
  @Output() modalClosed = new EventEmitter<void>();
  @Output() primaryBtnClicked = new EventEmitter<void>();
  @Output() secondaryBtnClicked = new EventEmitter<void>();
  @Output() beforeClosed = new EventEmitter<void>();
  @Output() afterClosed = new EventEmitter<void>();
  @Output() afterOpened = new EventEmitter<void>();

  icons = Icons;
  variant = ButtonVariant;
  type = ButtonType;

  private _onDestroy$ = new Subject();

  constructor(readonly dialog: MatDialog) {}

  ngOnChanges(): void {
    this._onIsOpenChanged(this.isOpen);
  }

  ngOnDestroy(): void {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }

  onPrimaryBtnClicked(): void {
    if (this.primaryBtnClicked.observers.length === 0) {
      this.closeDialog();
    } else {
      this.primaryBtnClicked.emit();
    }
  }

  onSecondaryBtnClicked(): void {
    if (this.secondaryBtnClicked.observers.length === 0) {
      this.closeDialog();
    } else {
      this.secondaryBtnClicked.emit();
    }
  }

  closeDialog(): void {
    this.isOpenChange.emit(false);
    this.dialogRef.close();
    this.dialogRef = null;
  }

  private _onIsOpenChanged(isOpen: boolean): void {
    if (this.dialogRef === null && isOpen === true) {
      this._initDialog();
    } else if (this.dialogRef && isOpen === false) {
      this.closeDialog();
    }
  }

  private _initDialog(): void {
    this.dialogRef = this.dialog.open(this.dialogTemplate, {
      panelClass: ['qpp-c-modal', 'cms-modal', ...this.panelClasses],
      backdropClass: ['qpp-c-modal-overlay', ...this.backdropClasses],
    });

    if (this.beforeClosed.observers.length === 1) {
      this.dialogRef
        .beforeClosed()
        .pipe(takeUntil(this._onDestroy$))
        .subscribe((_) => this.beforeClosed.emit());
    }

    if (this.afterClosed.observers.length === 1) {
      this.dialogRef
        .afterClosed()
        .pipe(takeUntil(this._onDestroy$))
        .subscribe((_) => this.afterClosed.emit());
    }

    if (this.afterOpened.observers.length === 1) {
      this.dialogRef
        .afterOpened()
        .pipe(takeUntil(this._onDestroy$))
        .subscribe((_) => this.afterOpened.emit());
    }

    this.dialogRef
      .backdropClick()
      .pipe(takeUntil(this._onDestroy$))
      .subscribe((_) => {
        this.closeDialog();
      });
  }
}
