import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ValidTestComponent } from './valid-test/valid-test.component';
import { FormsModule } from '@angular/forms';
 import { valid2Component } from "./valid2/valid2.component";
 import { ReactiveFormsModule } from '@angular/forms';
import { Valid3Component } from './valid3/valid3.component';
import { CustomMinDirective } from './valid3/custom-min-validator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ValidTestComponent,
    valid2Component,
    Valid3Component,
    CustomMinDirective
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
