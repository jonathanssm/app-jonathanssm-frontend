import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {routes} from "./app-routing.module";

import {PrimengModule} from "./shared/module/primeng.module";

import {AppComponent} from './app.component';
import {MenuBarComponent} from './shared/component/menubar/manubar.component';
import {HomeComponent} from './view/home/home.component';
import {AboutComponent} from "./view/about/about.component";
import {ContactComponent} from "./view/contact/contact.component";
import {InputMaskComponent} from "./shared/component/input-mask/input-mask.component";
import {ButtonComponent} from "./shared/component/button/button.component";
import {InputTextComponent} from "./shared/component/input-text/input-text.component";
import {EditorComponent} from "./shared/component/editor/editor.component";
import {HttpClientModule} from "@angular/common/http";
import {DropdownComponent} from "./shared/component/dropdown/dropdown.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InputMaskComponent,
    ButtonComponent,
    InputTextComponent,
    EditorComponent,
    DropdownComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
