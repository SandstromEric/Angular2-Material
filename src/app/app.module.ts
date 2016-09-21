import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdProgressCircleModule } from '@angular2-material/progress-circle';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdInputModule } from '@angular2-material/input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule.forRoot(),
    MdCardModule.forRoot(),
    MdProgressCircleModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdInputModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
