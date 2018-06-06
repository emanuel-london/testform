import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module
import { LocalStorageModule } from '@ngx-pwa/local-storage';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { DataService } from './data.service';
import { ResultsComponent } from './results/results.component';
import { FormDataService } from './data/formData.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    LocalStorageModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
  ],
  exports: [BsDropdownModule],
  providers: [  DataService,
    {provide: FormDataService, useClass: FormDataService}  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
