import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MultiMenu } from './models';

@Component({
  selector: 'app-mutil-lvl-list',
  templateUrl: './mutil-lvl-list.component.html',
  styleUrls: ['./mutil-lvl-list.component.scss']
})
export class MutilLvlListComponent {
  @Input() data: MultiMenu[] = []
  @Input() trigger = "Trigger Menu";
  @Input() isRootNode = false;
  @Input() code = null
  @Input() selectLastChildOnly = false
  @Output() onSelected = new EventEmitter()
  isExpandable(children): boolean {
    return Array.isArray(children)
  }
  selectItem(data) {
    console.log(data)
    this.onSelected.emit(data)
  }
}
