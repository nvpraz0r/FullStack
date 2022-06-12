import { Component, OnInit } from '@angular/core';
import { PlayerStats } from './player-stats';

@Component({
  selector: 'app-player-stats-list',
  templateUrl: './player-stats-list.component.html',
  styleUrls: ['./player-stats-list.component.css']
})
export class PlayerStatsListComponent implements OnInit {

  // create an array of objects
  // from player-stats class
  playerStatsList: PlayerStats[] = [
    new PlayerStats("Foo1","Bar1","Baz1",100),
    new PlayerStats("Foo2","Bar2","Baz2",200),
    new PlayerStats("Foo3","Bar3","Baz3",300),
    new PlayerStats("Foo4","Bar4","Baz4",400),
    new PlayerStats("Foo5","Bar5","Baz5",500)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}