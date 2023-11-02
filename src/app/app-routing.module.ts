import {Routes} from "@angular/router";
import {HomeComponent} from "./view/home/home.component";
import {AboutComponent} from "./view/about/about.component";
import {ContactComponent} from "./view/contact/contact.component";

export const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];
