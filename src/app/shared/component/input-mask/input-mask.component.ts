import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-mask',
  templateUrl: './input-mask.component.html',
  styleUrls: ['./input-mask.component.css']
})
export class InputMaskComponent {

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() mask!: string;
  @Input() label!: string;
  @Input() required!: boolean;
  @Input() readonly!: boolean;
  @Input() msgError!: string;

  getControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }

}
