import { Component, EventEmitter, Input, model, Output } from '@angular/core';

@Component({
  selector: 'app-rect',
  standalone: true,
  imports: [],
  templateUrl: './rect.component.html',
  styleUrl: './rect.component.css',
})
export class RectComponent {
  //for 2-way binding you name the Output() with the name of the input: 'size' + 'Change' eg. 'sizeChange'
  // @Input({ required: true }) size!: { width: string; height: string };
  // @Output() sizeChange = new EventEmitter<{ width: string; height: string }>();
  size = model.required<{ width: string; height: string }>();

  onReset() {
    // this.sizeChange.emit({
    //   width: '200',
    //   height: '100',
    // });
    this.size.set({
      width: '200',
      height: '100',
    });
  }
}
