import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material'


@Component({
    selector: 'qr-modal',
    templateUrl: './qr-modal.component.html',
    styleUrls: ['./qr-modal.component.scss']
})
export class QrModal implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }
    onClose() {
        this.dialog.closeAll();
    }
}