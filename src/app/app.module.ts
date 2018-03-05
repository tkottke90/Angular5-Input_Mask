import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatButtonModule, MatCardModule, MatInputModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CurrencyDirective } from './currency.directive';


@NgModule({
  declarations: [
    AppComponent,
    CurrencyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
