import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { AppComponent } from './app.component';
import { HomeInventoryFormComponent } from './home-inventory-form/home-inventory-form.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeInventoryFormComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
