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
import { TagsComponent } from './tags/tags.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { AutocompleteCompComponent } from './autocomplete-comp/autocomplete-comp.component';
import { CheckboxDeleteComponent } from './checkbox-delete/checkbox-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    PaginationComponent,
    MainComponentComponent,
    GetuserComponent,
    TagsComponent,
    ParentCompComponent,
    AutocompleteCompComponent,
    CheckboxDeleteComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
