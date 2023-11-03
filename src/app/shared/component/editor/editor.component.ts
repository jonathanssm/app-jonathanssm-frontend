import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() msgError!: string;
  @Input() style?: object = {'height': '320px'};

  getFormControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }

}
