import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servirpro';

  openUrl() {
    window.open('https://wa.me/3193029089', '_blank');
  }
}
