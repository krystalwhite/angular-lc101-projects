import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {

  favLinks = ["http://www.nytimes.com", "https://www.merriam-webster.com/word-games/universal-daily-crossword", "http://www.netflix.com", "https://media.giphy.com/media/1lBKw0J2GYqCyrRWmk/giphy.gif"];

  constructor() { }

  ngOnInit() {
  }

}
