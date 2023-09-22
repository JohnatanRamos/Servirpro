import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericButtonComponent } from 'src/app/shared/generic-button/generic-button.component';
import { OverlayPanelModule } from 'primeng/overlaypanel';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [CommonModule, GenericButtonComponent, OverlayPanelModule],
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss']
})
export class FrontPageComponent {
  openUrl() {
    window.open('https://api.whatsapp.com/send?phone=3193029089&text=Hola,%20visit%C3%A9%20el%20sitio%20web%20y%20estoy%20interesado%20en%20afiliarme', '_blank');
  }
}
