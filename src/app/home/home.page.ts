import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  slidesOptions = {
    slidesPerView: 3
  };

  slidesOptionsTop = {
    slidesPerView: 2
  };
}
