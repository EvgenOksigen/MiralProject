import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Material from '@angular/material'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { ContentComponent } from './content/content.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';
import { QrModal } from './_modal/qr-modal/qr-modal.component'


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftSideBarComponent,
    ContentComponent,
    RightSideBarComponent,
    QrModal
  ],
  imports: [
    BrowserModule,
    Material.MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [QrModal]
})
export class AppModule { }
