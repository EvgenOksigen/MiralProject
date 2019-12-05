import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LeftSideBarComponent } from './left-side-bar/left-side-bar.component';
import { ContentComponent } from './content/content.component';
import { RightSideBarComponent } from './right-side-bar/right-side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftSideBarComponent,
    ContentComponent,
    RightSideBarComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
