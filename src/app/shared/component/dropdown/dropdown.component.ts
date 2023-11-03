import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DropdownChangeEvent} from "primeng/dropdown";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() options!: any[];
  @Input() label?: string;
  @Input() placeholder?: string;
  @Input() msgError?: string;
  @Input() optionLabel?: string;
  @Input() optionValue?: string;
  @Input() filter?: boolean;
  @Input() editable?: boolean;
  @Input() required!: boolean;
  @Input() readonly!: boolean;

  @Output() onChange: EventEmitter<DropdownChangeEvent>;

  constructor() {
    this.onChange = new EventEmitter<DropdownChangeEvent>();
  }

  getFormControl(): FormControl {
    return this.formGroup.get(this.controlName) as FormControl;
  }

  emitChangeEvent(event: DropdownChangeEvent): void {
    this.onChange.emit(event);
  }

}
