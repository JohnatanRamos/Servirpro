import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'servirpro';
  hideTooltip = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.hideTooltip = false;
    }, 10000);
  }

  openUrl() {
    window.open('https://wa.me/3193029089', '_blank');
  }
}
