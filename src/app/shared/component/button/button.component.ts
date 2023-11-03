import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() rounded: boolean;
  @Input() icon?: string;
  @Input() iconPos?: any;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() tooltipPosition?: string;
  @Input() disabled?: boolean;

  @Output() onClick: EventEmitter<Event>;

  constructor() {
    this.rounded = false;
    this.tooltipPosition = 'bottom';
    this.disabled = false;

    this.onClick = new EventEmitter<Event>();
  }

  emitEventClick(event: any): void {
    this.onClick.emit(event);
  }

}
