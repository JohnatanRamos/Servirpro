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
    window.open('https://api.whatsapp.com/send?phone=3193029089&text=Hola,%20visit%C3%A9%20el%20sitio%20web%20y%20estoy%20interesado%20en%20afiliarme', '_blank');
  }
}
