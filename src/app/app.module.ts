import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { GetusersService } from './getusers.service';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [GetusersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
