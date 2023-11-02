import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {routes} from "./app-routing.module";

import {PrimengModule} from "./primeng.module";

import {AppComponent} from './app.component';
import {MenuBarComponent} from './shared/component/menubar/manubar.component';
import {HomeComponent} from './view/home/home.component';
import {AboutComponent} from "./view/about/about.component";
import {ContactComponent} from "./view/contact/contact.component";
import {InputMaskComponent} from "./shared/component/input-mask/input-mask.component";
import {ButtonComponent} from "./shared/component/button/button.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    InputMaskComponent,
    ButtonComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    BrowserAnimationsModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
