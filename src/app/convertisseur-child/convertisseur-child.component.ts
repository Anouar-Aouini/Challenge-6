import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-convertisseur-child',
  templateUrl: './convertisseur-child.component.html',
  styleUrls: ['./convertisseur-child.component.css']
})
export class ConvertisseurChildComponent implements OnInit {
  public childCount: number = 0
   // Using a setter
  // @Input("countToChild") public set count(value: number) {
  //   this.childCount = 2 * value;
  // }
  // Using ngOnChanges
  @Input() public countToChild: number=0;
  ngOnChanges(changes: SimpleChanges) {
    this.childCount = changes.countToChild.currentValue * 2;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
