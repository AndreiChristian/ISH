import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-region-item',
  templateUrl: './region-item.component.html',
  styleUrls: ['./region-item.component.scss']
})
export class RegionItemComponent {
  @Input() region:any;
}
