import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-actor',
  templateUrl: './actor.component.html',
  styleUrls: ['./actor.component.css']
})
export class ActorComponent implements OnInit {
  @Input("firstName") public first: string = "";
  @Input("lastName") public last: string = "";
  @Input("ind") public i: number = 0;
  @Output() public deleteEvent = new EventEmitter();
  @Output() public favoriteEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onCheck() {
  this.favoriteEvent.emit(this.i+"")
  }
  onDelete() {
    this.deleteEvent.emit(this.i + "")
  }
}
