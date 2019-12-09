import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'
import { QrModal } from '../_modal/qr-modal/qr-modal.component';

@Component({
  selector: 'right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  onModal() {
    this.dialog.open(QrModal);
  }
}
