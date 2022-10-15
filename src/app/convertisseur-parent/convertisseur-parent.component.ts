import { Component, OnInit, ViewChild } from '@angular/core';
import { ConvertisseurChildComponent } from '../convertisseur-child/convertisseur-child.component';

@Component({
  selector: 'app-convertisseur-parent',
  templateUrl: './convertisseur-parent.component.html',
  styleUrls: ['./convertisseur-parent.component.css']
})
export class ConvertisseurParentComponent implements OnInit {
  public count:any = 10;
  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild(ConvertisseurChildComponent, {static: false}) child?: ConvertisseurChildComponent;

  showCount() {
    this.count=this.child?.childCount
  }

}
