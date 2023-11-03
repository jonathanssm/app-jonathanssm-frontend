import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {SidebarModule} from "primeng/sidebar";
import {ToolbarModule} from 'primeng/toolbar';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from "primeng/inputtext";
import {RippleModule} from 'primeng/ripple';
import {AutoFocusModule} from 'primeng/autofocus';
import {AnimateModule} from 'primeng/animate';
import {SkeletonModule} from 'primeng/skeleton';
import {CardModule} from "primeng/card";
import {InputSwitchModule} from 'primeng/inputswitch';
import {TooltipModule} from "primeng/tooltip";
import {ImageModule} from "primeng/image";
import {InputMaskModule} from "primeng/inputmask";
import {ToastModule} from "primeng/toast";
import {EditorModule} from "primeng/editor";
import {DropdownModule} from "primeng/dropdown";
import {KeyFilterModule} from "primeng/keyfilter";

const MODULES: CommonModule[] = [
  ButtonModule,
  AvatarModule,
  AvatarGroupModule,
  SidebarModule,
  ToolbarModule,
  MenubarModule,
  InputTextModule,
  RippleModule,
  AutoFocusModule,
  AnimateModule,
  SkeletonModule,
  CardModule,
  InputSwitchModule,
  TooltipModule,
  ImageModule,
  InputMaskModule,
  ToastModule,
  EditorModule,
  DropdownModule,
  KeyFilterModule
]

@NgModule({
  declarations: [],
  imports: [MODULES],
  exports: [MODULES]
})
export class PrimengModule {
}
