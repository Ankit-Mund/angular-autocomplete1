import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
// import { GetusersService } from './getusers.service';
import { PaginationComponent } from './pagination/pagination.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { GetuserComponent } from './services/getuser/getuser.component';

import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    PaginationComponent,
    MainComponentComponent,
    GetuserComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
