import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Krystal Recommends These TV Shows:';
  image1 = 'https://m.media-amazon.com/images/M/MV5BNWQ1ZmM3MTQtNTVhZC00MWVlLWI5ZjgtYmZiYWQxZjUzZWM0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_.jpg';
  image2 = 'https://images-na.ssl-images-amazon.com/images/I/71LH4GfAaAL._SY445_.jpg';
  image3 = 'https://m.media-amazon.com/images/M/MV5BMjUxMDEzNTYyN15BMl5BanBnXkFtZTgwMjQyMzg1NzM@._V1_.jpg';

  constructor() { }

  ngOnInit() {
  }

}