import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }
  public favoriteActors : {'lastName':string,"firstName":string}[]=[];
  public actors = [{ 'lastName': 'Robert', 'firstName': 'Julia' },
                   { 'lastName': 'Walker', 'firstName': 'Paul' },
    { 'lastName': 'Pitt', 'firstName': 'Brad' }];

  deleteActor(ind: string) {
    let actor = this.favoriteActors.find(el => el.lastName === this.actors[+ind].lastName);
    if (actor) {
      this.favoriteActors=this.favoriteActors.filter(el=>el.lastName!==actor?.lastName)
    }
    this.actors = this.actors.filter((el, i) => i !== Number(ind))
  }
  OnFavoriteActor(ind: string) {
    if (this.favoriteActors.find(el => el.lastName === this.actors[+ind].lastName)) {
      this.favoriteActors=this.favoriteActors.filter(el=>el.lastName !== this.actors[+ind].lastName)
    } else {
      this.favoriteActors.push(this.actors[+ind])
    }
  }

}
