import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  @Input() rounded!: boolean;
  @Input() icon?: string;
  @Input() iconPos?: any;
  @Input() label?: string;
  @Input() tooltip?: string;
  @Input() tooltipPosition?: string = 'bottom'

  @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

  emitEventClick(event: Event): void {
    this.onClick.emit(event);
  }

}
